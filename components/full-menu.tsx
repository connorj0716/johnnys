"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Menu Data from Johnny's Offshore Café
const menuData = {
  breakfast: {
    "Farm Fresh Eggs": [
      { name: "2 Eggs Any Style", price: "$7.00", description: "Served with Home Fries and Choice of Toast" },
      { name: "3 Eggs Any Style", price: "$8.00", description: "Served with Home Fries and Choice of Toast" },
      { name: "McKinley Meal", price: "$9.00", description: "2 eggs any style with a choice of meat" },
      { name: "3 Egg McKinley Meal", price: "$10.00", description: "3 eggs any style with a choice of meat" },
    ],
    "Breakfast Sandwiches/Wraps": [
      { name: "Egg Sandwich", price: "$4.00", description: "2 eggs on a brioche bun or flour wrap" },
      { name: "Egg & Cheese", price: "$4.75", description: "Classic egg and cheese" },
      { name: "Egg, Meat & Cheese", price: "$6.00", description: "Egg with your choice of meat and cheese" },
      {
        name: "Gyro Breakfast Wrap",
        price: "$8.00",
        description: "Scrambled eggs, beef & lamb, meat, onion, tomato, & feta on pita bread",
      },
      { name: "Egg White Florentine", price: "$6.50", description: "With spinach finished with hollandaise sauce" },
      {
        name: "Western Sandwich",
        price: "$6.50",
        description: "Diced ham, onions, green peppers & choice of cheese folded into scrambled eggs",
      },
      { name: "Lox & Cream Cheese Bagel", price: "$9.00", description: "Not served with eggs" },
      { name: "Egg, Chorizo, Hashbrown & American Cheese", price: "$7.00", description: "Hearty breakfast sandwich" },
    ],
    "Breakfast Platters": [
      {
        name: "Steak & Eggs",
        price: "$20.00",
        description: "10 oz seasoned New York strip steak topped with two eggs any style",
      },
      {
        name: "Avocado Toast & Eggs",
        price: "$12.00",
        description:
          "Avocado slices on your choice of toast with tomatoes, arugula, & everything seasoning, finished with two eggs any style",
      },
      {
        name: "Lox Platter",
        price: "$14.00",
        description: "Smoked salmon on a toasted bagel with cream cheese, avocado, tomato, & arugula",
      },
      {
        name: "Lumber Jack",
        price: "$14.00",
        description: "Two eggs any style, sausage links, bacon strips & choice of pancakes or french toast",
      },
      {
        name: "Sausage Gravy & Biscuits",
        price: "$12.00",
        description: "Homemade sausage gravy over buttery biscuits topped with two eggs any style",
      },
      {
        name: "Huevos Rancheros",
        price: "$13.00",
        description:
          "Crispy corn tortillas topped with black beans, pico de gallo, avocado, chorizo, cotija cheese, salsa roja & two eggs any style",
      },
      {
        name: "Eggs Benedict",
        price: "$11.00",
        description: "Two poached eggs, Canadian bacon & homemade hollandaise over an English muffin",
      },
      {
        name: "C.D. M.X Chilaquiles",
        price: "$13.00",
        description:
          "Fried corn tortilla chips smothered in a red salsa, black beans, pico de gallo, red onions, avocado, oaxacha Mexican cheese, & two eggs any style",
      },
    ],
    Omelets: [
      { name: "All American", price: "$9.00", description: "White American cheese" },
      { name: "Western", price: "$11.00", description: "Diced ham, green peppers, onions & choice of cheese" },
      { name: "Gyro", price: "$12.00", description: "Beef & lamb meat, tomato, and onions served with tzatziki sauce" },
      { name: "Greek", price: "$11.00", description: "Baby spinach, tomatoes & feta cheese" },
      { name: "Hungry Man", price: "$12.00", description: "Bacon, sausage, onions, green peppers & cheddar cheese" },
      { name: "Meat Lover", price: "$13.00", description: "Sausage, bacon, pork roll, ham, & choice of cheese" },
      {
        name: "Vegetable Garden",
        price: "$12.00",
        description: "Baby spinach, broccoli florets, mushrooms, onions, green peppers, & tomatoes",
      },
      {
        name: "De Jalisse",
        price: "$12.00",
        description: "Chorizo, onions, green peppers, pico de gallo & pepper jack cheese",
      },
      {
        name: "Mexican",
        price: "$12.00",
        description: "Pico, black beans, avocado, cotija cheese, quabillo cheese, & chorizo smothered in salsa rojo",
      },
      {
        name: "Philly Cheese Steak",
        price: "$13.00",
        description: "Shaved beef or chicken green peppers, onions, mushrooms & American cheese",
      },
      { name: "Loaded Broccoli", price: "$12.00", description: "Diced bacon, broccoli florets & cheddar cheese" },
      { name: "Spanish", price: "$12.00", description: "Plum tomato salsa, onions, green peppers & cheddar cheese" },
      { name: "Lox & Cream Cheese", price: "$14.00", description: "Smoked salmon, cream cheese, tomato, & onions" },
    ],
    "Pancakes, French Toast & Waffles": [
      { name: "Short Stack Pancakes (2)", price: "$7.00", description: "With breakfast meat or two eggs $9.00" },
      { name: "Big Stack Pancakes (3)", price: "$8.00", description: "With breakfast meat or two eggs $10.00" },
      {
        name: "Short Stack French Toast (2 slices)",
        price: "$6.00",
        description: "With breakfast meat or two eggs $8.00",
      },
      {
        name: "Big Stack French Toast (3 slices)",
        price: "$7.00",
        description: "With breakfast meat or two eggs $9.00",
      },
      { name: "Plain Waffle", price: "$6.00", description: "With breakfast meat or two eggs $8.00" },
    ],
    "Breakfast Extras": [
      {
        name: "Breakfast Meat Sides",
        price: "$4.75",
        description:
          "Bacon, Pork Roll, Sausage Links, Sausage Patty, Canadian Bacon, Ham Steak, Philly Scrapple, Turkey Sausage, Turkey Bacon, Corned Beef Hash $5.25",
      },
      { name: "Home Fries", price: "$4.50", description: "Golden crispy potatoes" },
      { name: "Hashbrown Patty", price: "$4.50", description: "Crispy hashbrown" },
      { name: "Shredded Hashbrowns", price: "$4.50", description: "Classic shredded style" },
      { name: "Bowl of Grits", price: "$4.50", description: "Creamy Southern grits" },
      { name: "Cup of Grits", price: "$3.00", description: "Smaller portion" },
      { name: "Bowl of Fresh Fruit", price: "$5.00", description: "Seasonal fresh fruit" },
      { name: "Cup of Fresh Fruit", price: "$3.50", description: "Smaller portion" },
      { name: "English Muffin with Butter", price: "$2.50", description: "Toasted English muffin" },
      { name: "Croissant with Cream Cheese", price: "$3.00", description: "Buttery croissant" },
      { name: "Toasted Muffin", price: "$3.00", description: "Your choice of muffin" },
      { name: "Bowl of Oatmeal", price: "$4.50", description: "Hearty oatmeal" },
      { name: "Cup of Oatmeal", price: "$3.00", description: "Smaller portion" },
    ],
  },
  lunch: {
    Burgers: [
      { name: "American Burger", price: "$12.00", description: "With white American cheese" },
      { name: "Bacon Cheeseburger", price: "$14.00", description: "With bacon & American cheese" },
      {
        name: "California Burger",
        price: "$14.00",
        description: "California style with slices of avocado, & American cheese",
      },
      {
        name: "Quesadilla Burger",
        price: "$14.00",
        description: "With lettuce, pico de gallo, chipotle ranch & pepper jack cheese wrapped in a flour tortilla",
      },
      { name: "609 Burger", price: "$15.00", description: "With pork roll, fried egg & American cheese" },
      {
        name: "Mexican Burger",
        price: "$15.00",
        description: "With pico de gallo, slices of avocado, lettuce, crumbled chorizo & quesillo cheese",
      },
    ],
    "Hot Sandwiches": [
      {
        name: "Corn Beef Reuben",
        price: "$13.00",
        description: "Grilled sliced corn beef, Russian dressing, sauerkraut & Swiss cheese on grilled rye bread",
      },
      { name: "Philly Cheesesteak", price: "$12.00", description: "Shaved beef or chicken with American cheese" },
      {
        name: "Gyro",
        price: "$12.00",
        description:
          "Grilled beef and lamb slices over a grilled pita with lettuce, tomatoes, red onion & homemade tzatziki sauce",
      },
      {
        name: "Chicken Torta",
        price: "$13.00",
        description: "Crispy chicken, lettuce, tomatoes, avocado, chipotle mayo & Oaxaca cheese on a long roll",
      },
      {
        name: "Chicken Souvlaki",
        price: "$11.00",
        description: "Grilled chicken over a grilled pita with lettuce, tomatoes, red onion & homemade tzatziki sauce",
      },
      {
        name: "Monte Cristo",
        price: "$12.00",
        description: "Ham, sliced turkey, and Swiss cheese sandwiched between French toast",
      },
      { name: "Grilled Crab Cake", price: "$14.00", description: "Homemade jumbo crab cake with lettuce & tomatoes" },
      {
        name: "Chicken Milano",
        price: "$12.00",
        description: "Grilled Chicken, mozzarella, cherry peppers, & provolone on a garlic kaiser roll",
      },
      {
        name: "Tuna Melt",
        price: "$12.00",
        description: "Homemade tuna salad, tomato, and American cheese over grilled rye bread",
      },
    ],
    "Cold Sandwiches & Wraps": [
      { name: "BLT", price: "$10.00", description: "Bacon, lettuce, tomato & mayo on your choice of toast" },
      {
        name: "Avocado TBLT",
        price: "$11.00",
        description: "Turkey-bacon, lettuce, tomato, mayo & avocado on your choice of toast",
      },
      {
        name: "Turkey Club",
        price: "$12.00",
        description: "Sliced turkey, bacon, lettuce, tomato & mayo on your choice of toast",
      },
      {
        name: "Tuna Salad",
        price: "$10.00",
        description: "Chunky light tuna mixed with onions, celery & mayo on your choice of bread",
      },
      {
        name: "Chicken & Grape Salad",
        price: "$10.00",
        description: "Pulled white meat chicken mixed with seedless grapes, mayo, onions & celery on a brioche bun",
      },
      {
        name: "Chicken Cesar Wrap",
        price: "$12.00",
        description:
          "Grilled chicken breast tossed with romaine lettuce, grated parmesan, and cesar dressing filled into your choice of wrap",
      },
      {
        name: "Shrimp Po Boy Wrap",
        price: "$12.00",
        description:
          "Deep fried shrimp tossed in sweet & spicy sauce with lettuce, tomato, and onions filled into your choice of wrap",
      },
    ],
    Paninis: [
      {
        name: "Little Italy",
        price: "$12.00",
        description: "Grilled chicken, garlic spinach, roasted red peppers & fresh mozzarella",
      },
      {
        name: "Meatloaf Melt",
        price: "$12.00",
        description: "Grilled meatloaf, mozzarella cheese, fried onions served with a side of brown gravy",
      },
      {
        name: "Chicken Milanese",
        price: "$12.00",
        description: "Crispy chicken, balsamic glaze, roasted red peppers & fresh mozzarella",
      },
      { name: "Chicken Parm", price: "$11.00", description: "Crispy chicken, marinara sauce & mozzarella" },
      {
        name: "Portabello Caprese",
        price: "$11.00",
        description: "Grilled portabello mushrooms, tomato, pesto spread, balsamic glaze, and provolone cheese",
      },
      {
        name: "Honey Dijon Turkey",
        price: "$11.00",
        description: "Sliced turkey, honey mustard, bacon, tomatoes & cheddar cheese",
      },
      {
        name: "Grilled Roasted Beet",
        price: "$12.00",
        description: "Grilled roasted beets, ham, arugula, seasoned cream cheese, and honey drizzle",
      },
    ],
  },
  dinner: {
    Baskets: [
      { name: "Chicken Tender", price: "$11.00", description: "4 pieces of chicken tenders" },
      { name: "Butterfly Shrimp", price: "$13.00", description: "Half a pound of fried butterfly shrimp" },
      { name: "Grilled Cheese", price: "$9.00", description: "Classic American cheese on grilled white bread" },
      { name: "Grilled Hotdogs", price: "$10.00", description: "2 grilled all-beef Nathan's hotdogs" },
    ],
    Dinners: [
      { name: "Grilled Crab Cakes", price: "$18.00", description: "Homemade crab cakes grilled to a golden brown" },
      {
        name: "Pecan Crusted Flounder",
        price: "$17.00",
        description: "Fresh flounder fillet crusted with pecans finished with sauteed spinach",
      },
      {
        name: "Homemade Meatloaf",
        price: "$16.00",
        description: "Traditional home style meatloaf with mushroom brown gravy",
      },
      {
        name: "New York Strip Steak",
        price: "$24.00",
        description:
          "Grilled 10 oz New York strip steak cooked to your liking topped with mushrooms and crispy onion rings",
      },
      {
        name: "Chicken Margarita",
        price: "$16.00",
        description: "Pan seared chicken breast in a white wine with plum tomatoes, fresh mozzarella & basil leaves",
      },
      {
        name: "Chicken Penne Vodka",
        price: "$17.00",
        description: "Sauteed Chicken finished with penne pasta and vodka sauce (No choice of potato)",
      },
      {
        name: "Chicken Cacciatore",
        price: "$16.00",
        description:
          "Sauteed Chicken breast cooked with onions, peppers, and mushrooms finished with marinara. Over linguine",
      },
      {
        name: "Chicken Parmigiana",
        price: "$18.00",
        description: "Crispy chicken breast topped with marinara and mozzarella cheese (Available with linguine)",
      },
      {
        name: "Shrimp Parmigiana",
        price: "$20.00",
        description: "Crispy fried shrimp topped with marinara and mozzarella cheese (Available with linguine)",
      },
    ],
  },
  appetizers: {
    Appetizers: [
      {
        name: "Pierogies",
        price: "$10.00",
        description: "Stuffed cheddar potato fried with onions. Served with sour cream",
      },
      {
        name: "Chicken Fingers",
        price: "$8.00",
        description: "4 pieces of crispy chicken tenders served with choice of dipping sauce",
      },
      { name: "Mozzarella Sticks", price: "$8.00", description: "Served with marinara sauce" },
      {
        name: "Chicken Wings",
        price: "$10.00",
        description: "Choice of Mild, Hot, Garlic Parmesan, Teriyaki, Barbecue or General John",
      },
      {
        name: "Chicken Quesadilla",
        price: "$10.00",
        description: "Grilled chicken, pico de gallo & cheddar cheese. Served with sour cream & chunky salsa",
      },
      {
        name: "Disco Fries",
        price: "$9.00",
        description: "Crispy fries topped with brown gravy and mozzarella cheese",
      },
    ],
    Soups: [
      {
        name: "Soup of the Day",
        price: "Cup $3.50 / Bowl $4.50",
        description: "Ask your server for today's selection",
      },
      { name: "Chicken Noodle", price: "Cup $3.50 / Bowl $4.50", description: "Classic chicken noodle soup" },
      {
        name: "Homemade Chili",
        price: "Cup $4.00 / Bowl $5.00",
        description: "Top with Onions, Green Peppers, or Cheddar Cheese for an additional .50",
      },
    ],
    Salads: [
      {
        name: "Garden Salad",
        price: "$9.00",
        description: "Iceberg lettuce, tomatoes, cucumbers, red onion & croutons",
      },
      { name: "Caesar Salad", price: "$9.00", description: "Romaine lettuce, grated parmesan & croutons" },
      {
        name: "Cobb Salad",
        price: "$11.00",
        description: "Iceberg lettuce, tomatoes, bacon, avocado, crumbled bleu cheese & hard boil eggs",
      },
      {
        name: "Harvest Salad",
        price: "$9.50",
        description: "Romaine lettuce, raisins, sunflower seeds, pecans, crumbled bleu cheese & sliced beets",
      },
      {
        name: "Very Berry Field Salad",
        price: "$11.50",
        description: "Iceberg Lettuce, blueberries, strawberries, candied walnuts & crumbled bleu cheese",
      },
      {
        name: "Greek Village Salad",
        price: "$9.50",
        description:
          "Romaine lettuce, tomatoes, red onions, feta cheese & sliced black olives served with Greek Vinaigrette",
      },
    ],
  },
  kids: {
    "Kids Breakfast": [
      { name: "One Egg Any Style", price: "$8.00", description: "Served with drink and choice of breakfast meat" },
      { name: "Mickey Hot Cake", price: "$8.00", description: "Fun shaped pancake for kids" },
      { name: "French Toast", price: "$8.00", description: "Kid-sized French toast" },
      { name: "Waffle", price: "$8.00", description: "Kid-sized waffle" },
    ],
    "Kids Lunch": [
      { name: "Grilled Chicken Sandwich", price: "$8.00", description: "Served with drink and French Fries" },
      { name: "Chicken Fingers", price: "$8.00", description: "Kid-sized chicken fingers" },
      { name: "Grilled Cheese", price: "$8.00", description: "Classic grilled cheese" },
      { name: "Hot Dog", price: "$8.00", description: "All-beef hot dog" },
    ],
    "Kids Dinner": [
      { name: "Meatball with Linguine", price: "$8.00", description: "Served with a drink, with marinara sauce" },
      { name: "Chicken Parm", price: "$8.00", description: "Served with French Fries" },
      { name: "Fried Flounder", price: "$8.00", description: "Served with French Fries" },
      { name: "Meatloaf", price: "$8.00", description: "Served with French Fries with gravy" },
    ],
  },
  beverages: {
    "Hot Beverages": [
      { name: "Regular Coffee", price: "$2.50", description: "Freshly brewed" },
      { name: "Decaf Coffee", price: "$2.50", description: "Freshly brewed decaf" },
      { name: "Hot Chocolate", price: "$3.00", description: "Rich and creamy" },
      { name: "Hot Tea", price: "$2.50", description: "Assorted varieties" },
      { name: "Green Tea", price: "$2.50", description: "Antioxidant rich" },
      { name: "Decaf Hot Tea", price: "$2.50", description: "Caffeine free" },
    ],
    "Cold Beverages": [
      { name: "Iced Coffee", price: "$3.50", description: "Chilled and refreshing" },
      { name: "Orange Juice", price: "$3.50", description: "No Free Refills on Juices" },
      { name: "Apple Juice", price: "$3.50", description: "No Free Refills on Juices" },
      { name: "Cranberry Juice", price: "$3.50", description: "No Free Refills on Juices" },
      { name: "Grapefruit Juice", price: "$3.50", description: "No Free Refills on Juices" },
      { name: "Tomato Juice", price: "$3.50", description: "No Free Refills on Juices" },
      { name: "Chocolate Milk", price: "$3.00", description: "Cold and delicious" },
    ],
    "Soft Drinks": [
      { name: "Coca-Cola", price: "$2.75", description: "Free refills" },
      { name: "Diet Coca-Cola", price: "$2.75", description: "Free refills" },
      { name: "Sprite", price: "$2.75", description: "Free refills" },
      { name: "Lemonade", price: "$2.75", description: "Freshly made" },
      { name: "Unsweetened Iced Tea", price: "$2.75", description: "Free refills" },
      { name: "Raspberry Iced Tea", price: "$2.75", description: "Free refills" },
      { name: "Club Soda", price: "$2.50", description: "Sparkling" },
    ],
  },
}

type MenuCategory = keyof typeof menuData

export function FullMenu() {
  const [activeTab, setActiveTab] = useState<MenuCategory>("breakfast")

  return (
    <section className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Full Menu</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Breakfast, Lunch, & Dinner – Something delicious for everyone
          </p>
        </div>

        {/* Menu Tabs - Sticky Navigation */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as MenuCategory)} className="w-full">
          <div className="sticky top-20 z-40 bg-background py-4 border-b border-border">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto w-full mx-auto">
              <TabsTrigger
                value="breakfast"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                Breakfast
              </TabsTrigger>
              <TabsTrigger
                value="lunch"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                Lunch
              </TabsTrigger>
              <TabsTrigger
                value="dinner"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                Dinner
              </TabsTrigger>
              <TabsTrigger
                value="appetizers"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                Apps & Salads
              </TabsTrigger>
              <TabsTrigger
                value="kids"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                Kids Menu
              </TabsTrigger>
              <TabsTrigger
                value="beverages"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                Beverages
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(menuData).map(([category, sections]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid gap-8">
                {Object.entries(sections).map(([sectionName, items]) => (
                  <Card key={sectionName} className="border-border bg-card">
                    <CardHeader className="border-b border-border bg-primary/5">
                      <CardTitle className="text-2xl text-primary">{sectionName}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.map((item, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
                          >
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="font-semibold text-foreground">{item.name}</h4>
                              {item.price && (
                                <span className="text-primary font-bold whitespace-nowrap">{item.price}</span>
                              )}
                            </div>
                            {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-primary/5 rounded-lg border border-border">
          <p className="text-muted-foreground">
            All sandwiches served with Coleslaw or Pickles. Choice of French Fries, Potato Chips, Potato Salad, or Cup
            of Soup.
            <br />
            Substitute Onion Rings, Sweet Potato Fries, or House Salad for an additional $2.50
          </p>
        </div>
      </div>
    </section>
  )
}
