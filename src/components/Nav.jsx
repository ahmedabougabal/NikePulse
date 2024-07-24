import {headerLogo} from "/src/assets/images"
import {hamburger} from "/src/assets/icons"
import { navLinks } from "../constants"
import {toggleMenu} from "../logic"
const Nav = () => {
  return (
    <header className="padding-x py-8 absoulte z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/"> <img src={headerLogo} alt="logo" width={130} height={29} /></a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
      { navLinks.map((item) => (
        <li key={item.label}>
          <a href={item.href}
          className="font-montserrat leading-normal text-lg test-slate-gray">
            {item.label}</a>
        </li>
      ))}
        </ul>
        <div className=" hidden max-lg:block" >
          <img src={hamburger} alt="beefburger" width={25} height={25} onClick={toggleMenu} />
        </div>
        </nav>
    </header>
  )
}

export default Nav