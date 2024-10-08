
import {Avatar, Button, Dropdown, DropdownDivider, DropdownItem, Navbar, NavbarToggle, TextInput} from 'flowbite-react'
import { Link ,useLocation} from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import  {toggleTheme} from '../redux/theme/themeSlice' 
import { signoutSuccess } from '../redux/user/userSlice';



export default function Header ()  {
const path =useLocation().pathname;
const dispatch = useDispatch();
const {currentUser}= useSelector( (state)=> state.user);
const {theme} = useSelector((state) => state.theme)

const handleSignout = async () => {
  try {
    const res = await fetch('/api/user/signout', {
      method: 'POST',
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.message);
    } else {
      dispatch(signoutSuccess());
    }
  } catch (error) {
    console.log(error.message);
  }
};

   return (
    <Navbar className='border-b-2 '>
           <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'> 
             <span className='px-2 py-1 text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Akanksha's </span>
             Blog
           </Link>

          <form >
             <TextInput 
              type='text'
              placeholder='Search'
              rightIcon={AiOutlineSearch}
              className='hidden lg:inline'
             />
          </form>
          {/* <Button className='w-12 h-10 ' color='gray' pill>
            <AiOutlineSearch/>
          </Button> */}

          <div className='flex gap-2 md:order-2'>
          <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
            {theme === 'light' ? <FaSun/> : <FaMoon/>}
            </Button>

            {currentUser ? (
           <Dropdown

            arrowIcon ={false}
            inline
              label={
                <Avatar
                alt='user'
                img={currentUser.profilePicture}
                rounded/>
              }
              >
             <Dropdown.Header>
              <span className='block text-lg '> @{currentUser.username}</span>
              <span className='block text-lg font-bold truncate'>{currentUser.email}</span>
             </Dropdown.Header>
             <Link to={'/dashboard?tab=profile'}>
             <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <DropdownDivider/>
            <Dropdown.Item onClick={handleSignout} >Sign out</Dropdown.Item>
           </Dropdown>
            ):
            (

            
            <Link to={'/sign-in'}  >
                <Button   gradientDuoTone={'purpleToBlue'}  outline pill  >
                    Sign-In
                </Button>
            </Link>)
            }
            <NavbarToggle/>
            </div>
           
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                   <Link to='/' className='text-lg'>
                    Home
                   </Link>
                </Navbar.Link>
            </Navbar.Collapse>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/about"} as={'div'}>
                   <Link to='/about'  className='text-lg'>
                    About
                   </Link>
                </Navbar.Link>
            </Navbar.Collapse>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                   <Link to='/projects'  className='text-lg'>
                    Projects
                   </Link>
                </Navbar.Link>
            </Navbar.Collapse>
          
    </Navbar>
  )
};


