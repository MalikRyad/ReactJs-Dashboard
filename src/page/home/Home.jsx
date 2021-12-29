import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import {userData} from "../../dummydata";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLm from "../../components/widgetLm/WidgetLm";

export default function Home() {
    return (
        <div className="home">
           <FeaturedInfo></FeaturedInfo>
           <Chart data = {userData} title ="User Analytic" grid dataKey = "Active User"></Chart>
           <div className="homeWidgets">
           <WidgetSm></WidgetSm>
           <WidgetLm></WidgetLm>
           </div>
        </div>
    )
}
