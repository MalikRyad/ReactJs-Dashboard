import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { Button } from "@material-ui/core";

export default function WidgetSm() {
  return (
    <div className="widgetLg">
    <h3 className="widgetLgTitle">Latest transactions</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Customer</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Amount</th>
       
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">MALIK Riad</span>
        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount">$122.00</td>
       
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">kalem Sidali</span>
        </td>
        <td className="widgetLgDate">2 mai 2021</td>
        <td className="widgetLgAmount">$122.00</td>
       
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">Nechar Younes</span>
        </td>
        <td className="widgetLgDate">2 Jan 2021</td>
        <td className="widgetLgAmount">$122.00</td>
        
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">Belguanbour Amine</span>
        </td>
        <td className="widgetLgDate">2 april 2021</td>
        <td className="widgetLgAmount">$122.00</td>
        
      </tr>
    </table>
  </div>
  );
}