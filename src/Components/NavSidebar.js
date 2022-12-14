import Wrapper from "../assets/wrappers/NavSidebar";
import { CloseButton } from "../assets/wrappers/Buttons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeNavSidebar } from "../features/ui/uiSlice";
import { links } from "../utils/links";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const NavSidebar = () => {
  const dispatch = useDispatch();
  const { navSidebarOpen } = useSelector((store) => store.ui);

  // On click close navigation sidebar on mobile versions of the app
  const handleCloseNavSidebar = () => {
    dispatch(closeNavSidebar());
  };

  return (
    <Wrapper>
      <section
        className={
          navSidebarOpen
            ? "navSidebar-container show-navSidebar"
            : "navSidebar-container"
        }
      >
        <header>
          <div />
          <CloseButton onClick={handleCloseNavSidebar} />
        </header>
        <main>
          {links.map((link) => {
            const { id, text, path } = link;
            return (
              <Link
                key={id}
                to={path}
                className="linkSidebar"
                onClick={handleCloseNavSidebar}
              >
                {text}
              </Link>
            );
          })}
          <div className="socialIconsContainer">
            <Link to={"www.facebook.com"}>
              <FaFacebookF className="socialIcon" />
            </Link>
            <Link to={"www.instagram.com"}>
              <FaInstagram className="socialIcon" />
            </Link>
          </div>
        </main>
      </section>
    </Wrapper>
  );
};
export default NavSidebar;
