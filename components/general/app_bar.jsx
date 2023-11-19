import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
const MyAppBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://play-lh.googleusercontent.com/A22g2UL_Qfsc7Y_wCEB5dsC2ZMy6CahngFySoE36SWYDyMhUqfzOjX2iZ9u8JvzR4THu=w240-h480-rw"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          EThrift
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/">Нүүр</Link>
        <Link href="/shop">Дэлгүүр</Link>
        {/* <Navbar.Link>Дэлгүүр</Navbar.Link> */}
        <Link href="/contact">Холбоо барих</Link>
        <Link href="/aboutus">Бидний тухай</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyAppBar;
