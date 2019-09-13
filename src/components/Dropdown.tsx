import React from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";

export default function Dropdown(props: any) {
  return (
    <div className="navbarLinkDropdown">
      <Link className="navbarLink" to="/proizvodi">
        Proizvodi
      </Link>
      <div className="navbarDropdownContainer">
        <div className="navbarInnerDropdown">
          <DropdownItem
            title="Kolonijalna roba"
            imgLink="style/img/spices-2548653_640.jpg"
          />
          <DropdownItem
            title="Voće i povrće"
            imgLink="style/img/food-1209503_640.jpg"
          />
          <DropdownItem
            title="Mlečni proizvodi"
            imgLink="style/img/cheese-2785_640.jpg"
          />
        </div>
        <div className="navbarInnerDropdown">
          <DropdownItem
            title="Riba i proizvodi od ribe"
            imgLink="style/img/fish-984299_640.jpg"
          />
          <DropdownItem
            title="Mesni proizvodi"
            imgLink="style/img/salami-2645403_640.jpg"
          />
          <DropdownItem title="Jaja" imgLink="style/img/egg-944495_640.jpg" />
        </div>
        <div className="navbarInnerDropdown">
          <DropdownItem
            title="Konditori"
            imgLink="style/img/chocolate-183543_640.jpg"
          />
          <DropdownItem
            title="Alkoholna i bezalkoholna pića"
            imgLink="style/img/tee-1740871_640.jpg"
          />
          <DropdownItem
            title="Hemija"
            imgLink="style/img/lavender-products-616444_640.jpg"
          />
        </div>
      </div>
    </div>
  );
}
