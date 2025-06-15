import React from 'react';
import './MenuCard.css'; // Import custom CSS for styling
import biryani from './Biryani.jpg';
import bowls from './bowls.png';
import salad from './salads.jpg';
import wraps from './wraps.png';
import appetizers from './Appetizer.jpg';
import drinks from './drinks.jpg';
const menuData = {
  // Your existing data...
  appetizers: [
    { name: 'Golconda Chicken Sliders (2 Pieces)', description: 'Deep-fried chicken 65, tomato, onion, lettuce. Creamy tomato mayo.', price: '$8.99' },
    { name: 'Golconda Veggie Sliders (2 Pieces)', description: 'Palatina potato and vegetable patty, tomato, onion, lettuce. Creamy tomato mayo.', price: '$8.99' },
    { name: 'Dallas Chicken 65', description: 'Boneless chicken breast, spiced with curry leaves, mint chutney, and tossed salad.', price: '$9.99' },
    { name: 'Telangana Tomato Fava Bean Butter Dip', description: 'Served with fried pita bread chips.', price: '$6.99' },
    { name: 'Crispy Onion Pakoda', description: 'Sliced onions coated in a flavorful chickpea batter, fried to perfection.', price: '$6.99' },
    { name: 'Samosa (3 pcs)', description: 'Golden, flaky pastry pockets filled with a delightful medley of spiced potatoes, peas, and aromatic herbs. Served with Mint chutney.', price: '$4.49' },
  ],
  classicBiryanis: [
    { name: 'Chicken Dum Biryani', description: 'Aromatic with succulent chicken or goat meat in layers of fluffy rice, fragrant spices, and fried onions. Served with raita, boiled egg & saalan.', price: '$12.99' },
    { name: 'Chicken 65 Biryani', description: 'Marinated deep-fried chicken 65.', price: '$12.99' },
    { name: 'Goat Dum Biryani', description: 'Aromatic with succulent goat meat in layers of fluffy rice, fragrant spices, and fried onions. Served with raita, boiled egg & saalan.', price: '$14.99' },
    { name: 'Vijayawada Boneless Chicken Biryani', description: 'Vijayawada spiced boneless chicken biryani.', price: '$12.99' },
    { name: 'Schezwan Vegetable Fried Rice', description: 'Aromatic spices, crisp vegetables, and a mouthwatering Schezwan sauce, all expertly tossed with fragrant rice.', price: '$10.99' },
    { name: 'Schezwan Chicken Fried Rice', description: 'Tender chicken pieces stir-fried with egg, aromatic spices, crisp vegetables, and a mouthwatering Schezwan sauce, all expertly tossed with fragrant rice.', price: '$11.99' },
    { name: 'Vegetable Dum Biryani', description: 'Fragrant and flavorful rice dish with a rich blend of aromatic spices, tender vegetables, and long-grain basmati rice.', price: '$10.99' },
  ],
  wraps: [
    { name: 'Deccan Plateau Chicken Wrap', description: 'Southern spiced fried chicken bites, lettuce, tomato, onions & salt & chili potato bites.', price: '$8.99' },
    { name: 'Tandoori Chicken Tikka Wrap', description: 'Clay oven roasted chicken, spiced beans rice, sauteed peppers, onions, cilantro, cheese, sour cream & salsa.', price: '$8.99' },
    { name: 'Butter Chicken Wrap Panini', description: 'Butter chicken & saffron rice wrap & raita.', price: '$8.99' },
    { name: 'Paneer Tikka Wrap', description: 'Nawabs paneer tikka, vegetable slaw, Monterey Jack cheese, lettuce, tex-mex potato bites, mint dressing.', price: '$8.99' },
  ],
  bowls: [
    { name: 'Butter Chicken Bowl', description: 'Boneless creamy butter chicken, saffron rice.', price: '$10.99' },
    { name: 'Chettinad Mutton Bowl', description: 'Nilgiris goat korma, saffron rice.', price: '$12.99' },
    { name: 'Bangalore Chicken Korigassi Bowl', description: 'Chicken Korigassi, steam rice.', price: '$10.99' },
    { name: 'Vegetarian Bowl', description: 'Paneer butter masala and saffron rice.', price: '$10.99' },
    { name: 'Guntur Chicken Curry & Karampudi Bowl', description: 'Guntur chicken curry, steam rice.', price: '$10.99' },
  ],
  burgers: [
    { name: 'Fried Chicken 65 Burger', description: 'Breaded fried chicken breast 65, sriracha mayo, Swiss cheese, tomato, onion, lettuce & fries.', price: '$8.99' },
  ],
  salads: [
    { name: 'Chicken 65 Salad', description: 'Marinated deep-fried chicken 65, served on a bed of iceberg lettuce, carrots, peppers, onions, beets, fried tortilla chips & cilantro honey emulsion.', price: '$8.99' },
    { name: 'Charminar Tandoori Kabab Poke', description: 'Tandoori roasted chicken, tomato, green onions, cucumber, avocado, spiced edamame beans, Tandoori mayo, bed of cold quinoa pilaf.', price: '$9.99' },
  ],
  drinks: [
    { name: 'Coke', price: '$1.95' },
    { name: 'Diet Coke', price: '$1.95' },
    { name: 'Pepsi', price: '$1.95' },
    { name: 'Sprite', price: '$1.95' },
    { name: 'Bottled Water', price: '$1.95' },
    { name: 'Thumbs Up', price: '$2.95' },
    { name: 'Limca', price: '$2.95' },
    { name: 'Badam Milk', price: '$3.45' },
  ],
};

const MenuCard = () => {
  return (
    <div className="menu-card">
      <h1><i class="fa-solid fa-utensils" style={{color:'black',marginRight:'45px'}}></i>DAILY MENU<i class="fa-solid fa-utensils" style={{color:'black',marginLeft:'45px'}}></i></h1>
      <div className="menu-category">
        <div className="menu-column">
          <div className="menu-header">
            <img src={appetizers} alt="Appetizers" className="menu-image" />
            <h2>Appetizers</h2>
          </div>
          {menuData.appetizers.map((item, index) => (
            <div className="menu-item" key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}

          <div className="menu-header">
            <img src={biryani} alt="Classic Biryanis" className="menu-image" />
            <h2>Classic Biryanis and Rice Specials</h2>
          </div>
          {menuData.classicBiryanis.map((item, index) => (
            <div className="menu-item" key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="menu-column">
          {/* Wraps, Bowls, Burgers, Salads, Drinks */}
          <div className="menu-header">
            <img src={wraps} alt="Wraps" className="menu-image" />
            <h2>Wraps</h2>
          </div>
          {menuData.wraps.map((item, index) => (
            <div className="menu-item" key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}

          <div className="menu-header">
            <img src={bowls} alt="Bowls" className="menu-image" />
            <h2>Bowls</h2>
          </div>
          {menuData.bowls.map((item, index) => (
            <div className="menu-item" key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
          <div className="menu-header">
            <img src={salad} alt="salads" className="menu-image" />
            <h2>Salads</h2>
          </div>
          {menuData.salads.map((item, index) => (
            <div className="menu-item" key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
          <div className="menu-header">
            <img src={drinks} alt="Bowls" className="menu-image" />
            <h2>Drinks</h2>
          </div>
          {menuData.drinks.map((item, index) => (
            <div className="menu-item" key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
