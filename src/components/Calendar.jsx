// src/components/Calendar.jsx
import Event from './Event';

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Starbucks ☕️" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Morning Run 🏃‍♀️" color="blue" />
            <td></td>
            <Event event="Yolk 🍳" color="green" />
          </tr>

          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event event="Riverwalk Stroll 🌊" color="blue" />
            <td></td>
            <Event event="Subway 🚊" color="pink" />
            <td></td>
            <td></td>
            <Event event="The Bean 🫘" color="blue" />
          </tr>

          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <Event event="Art Institute 🎨" color="pink" />
            <td></td>
            <Event event="Coffee Chat ☕" color="green" />
            <Event event="Museum Campus 🦖" color="blue" />
            <td></td>
          </tr>

          <tr>
            <td className="time">11 am</td>
            <td></td>
            <Event event="Study Block 📚" color="green" />
            <td></td>
            <td></td>
            <Event event="CTA Ride Practice 🚇" color="pink" />
            <td></td>
            <Event event="Millennium Park 🌿" color="blue" />
          </tr>

          <tr>
            <td className="time">12 pm</td>
            <Event event="Deep Dish Lunch 🍕" color="pink" />
            <td></td>
            <td></td>
            <Event event="Lunch @ Food Hall 🥗" color="green" />
            <td></td>
            <Event event="Navy Pier 🎡" color="blue" />
            <td></td>
          </tr>

          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <Event event="Architecture Cruise ⛴️" color="blue" />
            <td></td>
            <td></td>
            <Event event="Boutique Shopping 🛍️" color="pink" />
            <td></td>
          </tr>

          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <Event event="Lincoln Park Zoo 🦁" color="blue" />
            <td></td>
            <td></td>
            <Event event="Photo Walk 📸" color="pink" />
            <td></td>
            <Event event="Garfield Conservatory 🌿" color="green" />
          </tr>

          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <Event event="Willis Tower 🏙️" color="blue" />
            <td></td>
            <Event event="Coffee + Planning ☕📝" color="green" />
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">4 pm</td>
            <Event event="Snack Break 🍪" color="green" />
            <td></td>
            <td></td>
            <Event event="Bookstore Stop 📖" color="pink" />
            <td></td>
            <td></td>
            <Event event="Lakeshore Drive 🚲" color="blue" />
          </tr>

          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <Event event="Early Dinner 🍽️" color="green" />
            <td></td>
            <td></td>
            <Event event="Chicago Theatre 🎭" color="pink" />
            <Event event="Sunset Point 🌇" color="blue" />
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
