#!/bin/bash
NAME="$1"
PHONE="$2"
STREET="$3"
CITY="$4"
STATE="$5"
ZIP="$6"
CATEGORY="$7"
SLUG=$(echo "$NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')

echo "Building site for: $NAME ($SLUG)"
echo "Category: $CATEGORY"

cd /tmp
rm -rf "$SLUG"
cp -r ~/johnnys "$SLUG"
cd "$SLUG"
rm -rf .git

# ─── Generate Google Maps embed URL from address ───
ENCODED_ADDR=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$STREET, $CITY, $STATE $ZIP'))")
MAPS_EMBED="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${ENCODED_ADDR}"

# ─── Generate favicon with first letter ───
python3 << 'FAVEOF'
from PIL import Image, ImageDraw, ImageFont
import sys

letter = "$NAME"[0].upper()
size = 64
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.rounded_rectangle([0, 0, size-1, size-1], radius=12, fill=(0, 123, 214))
try:
    font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
except:
    font = ImageFont.load_default()
bbox = draw.textbbox((0, 0), letter, font=font)
tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]
draw.text(((size - tw) / 2, (size - th) / 2 - 4), letter, fill="white", font=font)
img.save("app/favicon.ico", format="ICO", sizes=[(64, 64)])
print("Favicon generated")
FAVEOF

# ─── Set category-specific images ───
python3 - "$NAME" "$PHONE" "$STREET" "$CITY" "$STATE" "$ZIP" "$CATEGORY" "$MAPS_EMBED" << 'PYEOF'
import sys

name = sys.argv[1]
phone = sys.argv[2]
street = sys.argv[3]
city = sys.argv[4]
state = sys.argv[5]
zipcode = sys.argv[6]
category = sys.argv[7]
maps_embed = sys.argv[8]
phone_raw = phone.replace("(","").replace(")","").replace("-","").replace(" ","")

# Category-specific content
cat_data = {
    "breakfast": {
        "hero": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1600&q=80",
        "about": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
        "items": [
            {"name": "Classic Pancakes", "desc": "Fluffy buttermilk pancakes with maple syrup", "price": "$10.00", "img": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80"},
            {"name": "Eggs Benedict", "desc": "Poached eggs with hollandaise on English muffin", "price": "$13.00", "img": "https://images.unsplash.com/photo-1608039829572-9b1234ef1321?w=600&q=80"},
            {"name": "French Toast", "desc": "Thick-cut brioche with berries and cream", "price": "$11.00", "img": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80"},
        ],
        "tagline": f"Breakfast & Brunch in {city}, {state}",
        "features": [
            {"icon": "utensils", "title": "All-Day Breakfast", "desc": "Breakfast served anytime"},
            {"icon": "leaf", "title": "Fresh Ingredients", "desc": "Made from scratch daily"},
            {"icon": "heart", "title": "Family Friendly", "desc": "A warm welcome for all"},
            {"icon": "dollar", "title": "Great Value", "desc": "Quality at fair prices"},
        ],
    },
    "lunch": {
        "hero": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
        "about": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        "items": [
            {"name": "Signature Burger", "desc": "Half-pound patty with all the fixings", "price": "$14.00", "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"},
            {"name": "Fresh Salad", "desc": "Mixed greens with house vinaigrette", "price": "$11.00", "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80"},
            {"name": "Club Sandwich", "desc": "Triple-decker with turkey, bacon, and avocado", "price": "$12.00", "img": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80"},
        ],
        "tagline": f"Fresh Food & Good Vibes in {city}, {state}",
        "features": [
            {"icon": "utensils", "title": "Fresh Daily Menu", "desc": "New specials every week"},
            {"icon": "leaf", "title": "Quality Ingredients", "desc": "Locally sourced when possible"},
            {"icon": "heart", "title": "Community Hub", "desc": "Your neighborhood spot"},
            {"icon": "dollar", "title": "Fair Prices", "desc": "Great food, honest prices"},
        ],
    },
    "bar": {
        "hero": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80",
        "about": "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80",
        "items": [
            {"name": "Craft Cocktail", "desc": "Handcrafted with premium spirits", "price": "$14.00", "img": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80"},
            {"name": "Wings Platter", "desc": "Crispy wings with house-made sauces", "price": "$13.00", "img": "https://images.unsplash.com/photo-1527477396000-e27163b4bbed?w=600&q=80"},
            {"name": "Loaded Nachos", "desc": "Piled high with all the toppings", "price": "$12.00", "img": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&q=80"},
        ],
        "tagline": f"Drinks, Food & Good Times in {city}, {state}",
        "features": [
            {"icon": "utensils", "title": "Full Menu", "desc": "Food and drinks til close"},
            {"icon": "leaf", "title": "Craft Selection", "desc": "Local and craft options"},
            {"icon": "heart", "title": "Great Atmosphere", "desc": "Where locals hang out"},
            {"icon": "dollar", "title": "Happy Hour", "desc": "Daily drink specials"},
        ],
    },
    "pizza": {
        "hero": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&q=80",
        "about": "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=800&q=80",
        "items": [
            {"name": "Margherita Pizza", "desc": "Fresh mozzarella, basil, and San Marzano tomatoes", "price": "$16.00", "img": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80"},
            {"name": "Pepperoni Pie", "desc": "Classic pepperoni with house-made sauce", "price": "$15.00", "img": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80"},
            {"name": "Garlic Knots", "desc": "Fresh-baked with garlic butter and parmesan", "price": "$7.00", "img": "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=600&q=80"},
        ],
        "tagline": f"Authentic Pizza in {city}, {state}",
        "features": [
            {"icon": "utensils", "title": "Hand-Tossed Dough", "desc": "Made fresh daily"},
            {"icon": "leaf", "title": "Quality Toppings", "desc": "Premium ingredients"},
            {"icon": "heart", "title": "Family Tradition", "desc": "Recipes passed down"},
            {"icon": "dollar", "title": "Great Value", "desc": "Generous portions"},
        ],
    },
    "seafood": {
        "hero": "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=1600&q=80",
        "about": "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80",
        "items": [
            {"name": "Lobster Roll", "desc": "Fresh-caught lobster on a buttered roll", "price": "$22.00", "img": "https://images.unsplash.com/photo-1559742811-822aa886c9b0?w=600&q=80"},
            {"name": "Fish & Chips", "desc": "Beer-battered cod with seasoned fries", "price": "$16.00", "img": "https://images.unsplash.com/photo-1580217593608-61931ceaa71e?w=600&q=80"},
            {"name": "Shrimp Scampi", "desc": "Sauteed shrimp in garlic butter sauce", "price": "$18.00", "img": "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=600&q=80"},
        ],
        "tagline": f"Fresh Seafood in {city}, {state}",
        "features": [
            {"icon": "utensils", "title": "Fresh Catch Daily", "desc": "Straight from the dock"},
            {"icon": "leaf", "title": "Shore Quality", "desc": "Jersey Shore seafood"},
            {"icon": "heart", "title": "Waterfront Vibes", "desc": "Casual coastal dining"},
            {"icon": "dollar", "title": "Fair Market Price", "desc": "Fresh at honest prices"},
        ],
    },
    "coffee": {
        "hero": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80",
        "about": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80",
        "items": [
            {"name": "Craft Latte", "desc": "Espresso with steamed milk and house syrup", "price": "$6.00", "img": "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80"},
            {"name": "Fresh Pastry", "desc": "Baked in-house every morning", "price": "$4.00", "img": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"},
            {"name": "Breakfast Wrap", "desc": "Eggs, cheese, and your choice of protein", "price": "$9.00", "img": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80"},
        ],
        "tagline": f"Coffee & Community in {city}, {state}",
        "features": [
            {"icon": "utensils", "title": "Specialty Coffee", "desc": "Craft roasted beans"},
            {"icon": "leaf", "title": "Fresh Baked", "desc": "Pastries made daily"},
            {"icon": "heart", "title": "Cozy Atmosphere", "desc": "Your morning ritual"},
            {"icon": "dollar", "title": "Loyalty Rewards", "desc": "Every 10th drink free"},
        ],
    },
    "general": {
        "hero": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
        "about": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        "items": [
            {"name": "House Special", "desc": "Our most popular dish", "price": "$14.00", "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"},
            {"name": "Fresh Salad", "desc": "Made with local ingredients", "price": "$11.00", "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80"},
            {"name": "Daily Special", "desc": "Ask your server for today's pick", "price": "$12.00", "img": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80"},
        ],
        "tagline": f"Great Food in {city}, {state}",
        "features": [
            {"icon": "utensils", "title": "Full Menu", "desc": "Something for everyone"},
            {"icon": "leaf", "title": "Fresh & Quality", "desc": "Made with care"},
            {"icon": "heart", "title": "Community Spot", "desc": "Where locals gather"},
            {"icon": "dollar", "title": "Great Value", "desc": "Quality at fair prices"},
        ],
    },
}

data = cat_data.get(category, cat_data["general"])

items_str = ""
for item in data["items"]:
    items_str += f'    {{ name: "{item["name"]}", description: "{item["desc"]}", price: "{item["price"]}", image: "{item["img"]}", alt: "{item["name"]}" }},\n'

features_str = ""
for feat in data["features"]:
    features_str += f'    {{ icon: "{feat["icon"]}", title: "{feat["title"]}", description: "{feat["desc"]}" }},\n'

config = f'''export const siteConfig = {{
  name: "{name}",
  tagline: "{data["tagline"]}",
  description: "{name} is a locally loved restaurant located in {city}, {state}. We proudly serve fresh, quality food for locals and visitors alike. Stop in and experience great food, friendly service, and a warm atmosphere that keeps people coming back.",
  category: "{category}" as "breakfast" | "lunch" | "bar" | "pizza" | "seafood" | "coffee" | "general",
  phone: "{phone}",
  phoneRaw: "{phone_raw}",
  address: {{
    street: "{street}",
    city: "{city}",
    state: "{state}",
    zip: "{zipcode}",
  }},
  hours: [
    {{ days: "Monday - Friday", time: "8am - 9pm" }},
    {{ days: "Saturday - Sunday", time: "8am - 10pm" }},
  ],
  orderOnline: "",
  facebook: "",
  instagram: "",
  googleMapsDir: "https://www.google.com/maps/dir/?api=1&destination={street.replace(" ", "+")},+{city.replace(" ", "+")},+{state}+{zipcode}",
  googleMapsEmbed: "{maps_embed}",
  googleReviewsUrl: "https://www.google.com/maps/search/{name.replace(" ", "+")}+{city.replace(" ", "+")}+{state}",
  googleRating: "4.8",
  images: {{
    logo: "",
    hero: "{data["hero"]}",
    about: "{data["about"]}",
  }},
  menuHighlights: [
{items_str}  ],
  reviews: [
    {{ text: "Amazing food and great service! We come here every week and it never disappoints.", author: "Google Reviewer" }},
    {{ text: "Best local spot in town. Fresh food, fair prices, and the staff treats you like family.", author: "Google Reviewer" }},
    {{ text: "Love this place! The portions are generous and everything is made fresh. Highly recommend.", author: "Google Reviewer" }},
  ],
  features: [
{features_str}  ],
  seo: {{
    title: "{name} | Restaurant in {city}, {state}",
    description: "{name} in {city}, {state}. Fresh food, great service, and a welcoming atmosphere for the whole family.",
  }},
}}
'''

with open('lib/config.ts', 'w') as f:
    f.write(config)
print(f'Config generated for {name} (category: {category})')
PYEOF

echo "Deploying to Vercel..."
vercel --yes --name "$SLUG-preview" --prod 2>&1 | tail -5

echo ""
echo "Done! Preview: https://$SLUG-preview.vercel.app"
