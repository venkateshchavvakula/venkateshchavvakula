import React, { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { Routes, Route, Navigate, Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { uuid } from '../utils/helpers'
import { getLoggedInUser, isUserLoggedIn } from '../utils/auth'
import { loggedOut } from '../features/auth/authSlice'

import NotFound from '../components/PageNotFound'
// components
const Login = lazy(() => import('../components/Pages/Auth/Login'))
const Dashboard = lazy(() => import('../components/Pages/Dashboard'))

type Children = {
    children: any
}
type PrivateRouteProps = {
    children: any
    userRole: string[]
}

function useOutsideAlerter(ref: any, callbak: any) {
    useEffect(() => {
        /**
         * clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callbak(false)
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}

const RestrictedRoute = ({ children }: Children) => {
    const auth = isUserLoggedIn()
    return !auth ? children : <Navigate to='/dashboard' />
}

const PrivateRoute = ({ children, userRole }: PrivateRouteProps) => {
    const auth = isUserLoggedIn()
    const [isSidebarOpen, setMenuOpen] = useState(true)

    if (!auth) {
        return <Navigate to='/login' />
    }

    let user: any = {
        name: '',
        email: '',
    }
    const loggedUser = getLoggedInUser()
    if (loggedUser) {
        user = loggedUser
    }
    const [, setOpenMenuIndex] = useState(0)
    const location = useLocation()
    const dispatch = useDispatch<any>()
    const [showUserInfo, setUserInfo] = React.useState(false)
    const navigate = useNavigate()
    const wrapperInfoRef = useRef(null)
    useOutsideAlerter(wrapperInfoRef, setUserInfo)

    function toggleUserInfo() {
        if (showUserInfo) {
            return setUserInfo(false)
        }
        setUserInfo(true)
        return true
    }

    function logout() {
        dispatch(loggedOut())
        navigate('/login')
    }

    const { pathname } = location
    const splitLocation = pathname.split('/')
    const ROUTES = [
        {
            name: 'Dashboard',
            icon: `<svg viewBox="0 0 512 512" class="icon lpanel-icon">
      <path d="M474.5 261.1l-204-224.5c-3.8-4.2-9.2-6.6-14.8-6.6-5.6 0-11 2.4-14.8 6.6L37.4 261.1c-7.4 8.2-6.8 20.8 1.4 28.2 3.8 3.5 8.6 5.2 13.4 5.2 5.4 0 10.9-2.2 14.8-6.6l8.7-9.6v133.6c0 18.7 7.3 36.3 20.5 49.5 13.2 13.2 30.8 20.5 49.5 20.5h.1l61.9-.1c11 0 20-9 20-20v-92.5c0-7.4 2.9-14.5 8.2-19.8 5.3-5.3 12.3-8.2 19.8-8.2 15.4 0 27.9 12.5 27.9 27.9V462c0 11 9 20 20 20h62.1c38.6 0 70-31.4 70-70V277.9l9.2 10.1c7.4 8.2 20.1 8.8 28.3 1.4s8.8-20.1 1.3-28.3zm-78.7-23.3V412c0 16.5-13.5 30-30 30h-42.1v-72.7c0-37.4-30.4-67.8-67.9-67.9-18.1 0-35.2 7.1-48.1 19.9-12.9 12.9-20 29.9-20 48.1v72.5h-41.9c-8 0-15.5-3.1-21.2-8.8-5.7-5.7-8.8-13.2-8.8-21.2V237.8c0-1.1-.1-2.2-.3-3.3L255.8 79.8l140.3 154.5c-.2 1.1-.3 2.3-.3 3.5z"></path>
      </svg>`,
            sub_menus: [],
            index: 1,
            url: 'dashboard',
            module: 'dashboard',
        },
        {
            name: 'Blogs',
            icon: `<svg viewBox="0 0 512 512" class="icon lpanel-icon"><path d="M435.7 322.5c-28.6-28.3-66.6-43.7-106.9-43.3l-73 .7-75.6.7c-39.7.4-77 16.2-105 44.4s-43.3 65.7-43.3 105.4v31.7c0 11 9 20 20 20s20-9 20-20v-31.7c0-29.1 11.3-56.6 31.8-77.2s47.8-32.2 76.9-32.5l55.2-.5v69.2c0 11 9 20 20 20s20-9 20-20v-69.6l53.4-.5c29.5-.3 57.4 11 78.3 31.8 21 20.8 32.5 48.5 32.5 78v29.1c0 11 9 20 20 20s20-9 20-20v-29.1c.1-40.4-15.7-78.2-44.3-106.6zm-179.9-80.2c58.8 0 106.7-47.6 106.7-106.2S314.6 29.9 255.8 29.9 149.1 77.5 149.1 136.1 197 242.3 255.8 242.3zm0-172.4c36.8 0 66.7 29.7 66.7 66.2s-29.9 66.2-66.7 66.2-66.7-29.7-66.7-66.2 29.9-66.2 66.7-66.2z"></path></svg>`,
            sub_menus: [],
            index: 2,
            url: 'blogs',
            module: 'blogs',
        },
    ]

    return auth && userRole ? (
        <div className='flex h-screen overflow-y-hidden bg-white text-white'>
            <aside
                className={`fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-52  border-r
       max-h-screen overflow-hidden transition-all transform bg-primary border-r-darkGray
       shadow-lg lg:z-auto lg:static lg:shadow-none text-navGrey ${
           !isSidebarOpen ? '-translate-x-full lg:translate-x-0 lg:w-20' : ''
       }`}
            >
                <div
                    className={`flex items-center justify-center flex-shrink-0 p-2 ${
                        !isSidebarOpen ? 'lg:justify-center' : ''
                    }`}
                >
                    <span className='flex gap-6   p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap'>
                        {isSidebarOpen ? 'Venkatesh' : 'V'}
                    </span>
                    <button
                        type='button'
                        className=' p-2 rounded-md lg:hidden'
                        onClick={() => setMenuOpen(!isSidebarOpen)}
                    >
                        <svg
                            className='w-6 h-6 text-SpaceCadet'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>
                <nav className='flex-1  pt-4  overflow-auto' id='slimscrool'>
                    <ul>
                        {React.Children.toArray(
                            ROUTES.map((x: any) => (
                                <li
                                    className={`pb-2 menu ${
                                        x.sub_menus.length && isSidebarOpen ? 'is-sub-menu' : ''
                                    }
               ${x.url && splitLocation.includes(x.module) ? 'active-link' : ''}`}
                                    onClick={() =>
                                        x.sub_menus.length &&
                                        isSidebarOpen &&
                                        setOpenMenuIndex(x.index)
                                    }
                                >
                                    <Link
                                        to={`/${x.url}`}
                                        className={`flex items-center py-2 px-4  space-x-4   ${
                                            !isSidebarOpen ? 'justify-center rounded-md' : ''
                                        }`}
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: x.icon }}></span>
                                        <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>
                                            {x.name}
                                        </span>
                                    </Link>
                                    {x.sub_menus.length &&
                                    isSidebarOpen &&
                                    splitLocation.includes(x.module) ? (
                                        <ul className='submenu pt-2 '>
                                            {x.sub_menus.map((y: any) => (
                                                <li
                                                    key={uuid()}
                                                    className={`${
                                                        splitLocation.includes(y.sub_module)
                                                            ? 'active'
                                                            : ''
                                                    }`}
                                                >
                                                    <Link to={`/${y.url}`}>
                                                        <a>
                                                            <span>{y.name}</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        ''
                                    )}
                                </li>
                            )),
                        )}
                    </ul>
                </nav>
            </aside>

            <div className='flex flex-col flex-1 h-full overflow-hidden'>
                <header className='flex-shrink-0'>
                    <div className='flex items-center justify-between p-2 border-b border-Geyser'>
                        <div>
                            {' '}
                            <div className='cursor-pointer'>
                                <svg
                                    className={` ${
                                        isSidebarOpen
                                            ? 'rotate-0 ease-in-out  duration-300			'
                                            : 'rotate-180	 ease-in-out  duration-300'
                                    }`}
                                    onClick={() => setMenuOpen(!isSidebarOpen)}
                                    width='29'
                                    height='16'
                                    viewBox='0 0 29 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M11.2 1.6C11.2 0.716344 11.9163 0 12.8 0H27.2C28.0837 0 28.8 0.716344 28.8 1.6C28.8 2.48366 28.0837 3.2 27.2 3.2H12.8C11.9163 3.2 11.2 2.48366 11.2 1.6ZM7.53137 2.06863C8.15621 2.69347 8.15621 3.70653 7.53137 4.33137L5.46274 6.4H27.2C28.0837 6.4 28.8 7.11634 28.8 8C28.8 8.88366 28.0837 9.6 27.2 9.6H5.46274L7.53137 11.6686C8.15621 12.2935 8.15621 13.3065 7.53137 13.9314C6.90653 14.5562 5.89347 14.5562 5.26863 13.9314L0.469266 9.13201C0.469053 9.13179 0.468841 9.13158 0.468629 9.13137C0.467498 9.13024 0.466369 9.12911 0.465241 9.12797C0.313521 8.97536 0.19891 8.79977 0.121406 8.61245C0.0431767 8.4238 0 8.21694 0 8C0 7.78306 0.0431767 7.5762 0.121406 7.38755C0.199486 7.19883 0.315227 7.02203 0.468629 6.86863C0.468647 6.86861 0.468664 6.86859 0.468682 6.86858L5.26863 2.06863C5.89347 1.44379 6.90653 1.44379 7.53137 2.06863ZM11.2 14.4C11.2 13.5163 11.9163 12.8 12.8 12.8H27.2C28.0837 12.8 28.8 13.5163 28.8 14.4C28.8 15.2837 28.0837 16 27.2 16H12.8C11.9163 16 11.2 15.2837 11.2 14.4Z'
                                        fill='#141C4C'
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className='relative flex items-center space-x-3 sm:pr-3 sm:mr-4'>
                            <div
                                className=' gap-4 flex items-center justify-between relative'
                                ref={wrapperInfoRef}
                            >
                                <p className='font-bold text-SpaceCadet'>
                                    Hi {''}
                                    {user?.name}
                                </p>

                                <div className='relative '>
                                    <svg
                                        className='cursor-pointer'
                                        onClick={() => toggleUserInfo()}
                                        width='16'
                                        height='18'
                                        viewBox='0 0 10 6'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M1 0.881894L5 5.11719L9 0.881894'
                                            stroke='#141C4C'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </svg>

                                    <div
                                        className={`absolute w-44  top-3 left-8  user-login-info  mt-3 transform -translate-x-full layout-menu rounded-md shadow-lg ${
                                            showUserInfo ? 'block' : 'hidden'
                                        } `}
                                    >
                                        <ul className=' text-SpaceCadet flex flex-col p-2 my-2 space-y-1'>
                                            <li>
                                                <Link
                                                    className=' font-bold block px-2 py-1 transition rounded-md cursor-pointer'
                                                    to={`/users/view/${user.id}`}
                                                >
                                                    My Profile
                                                </Link>
                                            </li>
                                        </ul>
                                        <div
                                            onClick={() => logout()}
                                            className='cursor-pointer font-bold text-SpaceCadet flex justify-between items-center p-4   border-t border-t-line'
                                        >
                                            <p>Logout</p>
                                            <svg
                                                width='17'
                                                height='16'
                                                viewBox='0 0 17 16'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M10.2611 4.54162V3.84187C10.2611 2.31562 9.02363 1.07812 7.49738 1.07812H3.84113C2.31563 1.07812 1.07812 2.31562 1.07812 3.84187V12.1894C1.07812 13.7156 2.31563 14.9531 3.84113 14.9531H7.50488C9.02663 14.9531 10.2611 13.7194 10.2611 12.1976V11.4904'
                                                    stroke='#151929'
                                                    stroke-width='1.5'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                                <path
                                                    d='M15.5307 8.375H6.5'
                                                    stroke='#151929'
                                                    stroke-width='1.5'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                                <path
                                                    d='M13.1602 5.82812L15.3562 8.01437L13.1602 10.2014'
                                                    stroke='#151929'
                                                    stroke-width='1.5'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className='flex-1 max-h-full p-2 lg:p-5 overflow-hidden overflow-y-scroll text-SpaceCadet  bg-CalmWaters'>
                    {children}
                </main>
            </div>
        </div>
    ) : (
        <Navigate to='/page-not-found' />
    )
}
export const Layout = () => (
    <div className=' '>
        <Suspense fallback={<h1 className='loader'> Loading....</h1>}>
            <Routes>
                <Route path='/' element={<Navigate to='/login' />} />
                <Route
                    path='/dashboard'
                    element={
                        <PrivateRoute userRole={['admin']}>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                {/* Login and Signup Routes */}
                <Route
                    path='/login'
                    element={
                        <RestrictedRoute>
                            <Login />
                        </RestrictedRoute>
                    }
                />

                {/* <Route
                    path='/reports'
                    element={
                        <PrivateRoute userRole={['admin']}>
                            <ReportsListing />
                        </PrivateRoute>
                    }
                /> */}

                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    </div>
)
