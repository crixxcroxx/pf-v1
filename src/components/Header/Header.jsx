import Navbar from "../Navbar";
import BurgerMenu from "../BurgerMenu";
import FlexBox from "../FlexBox";

export default function Header() {

  return (
    <header>
      <Navbar>
        <span>CM</span>

        <FlexBox gap={1}>
          <FlexBox hide="sm" gap={1}>
            <div>Home</div>
            <div>Contact</div>
            <div>About</div>
          </FlexBox>

          <BurgerMenu />
        </FlexBox>
      </Navbar>
    </header>
  );
}