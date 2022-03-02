import React from "react"
import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import * as IoIcon from 'react-icons/io'
import * as MdIcon from 'react-icons/md'

export const SidebarData=[

    {
        title: 'Home',
        path:'/',
        icon: <AiIcon.AiFillHome/>,
        cName: 'nav-text'

    },
    {
        title: 'Favorites',
        path:'/Favorites',
        icon: <MdIcon.MdFavorite/>,
        cName: 'nav-text'

    },
    {
        title: 'Support',
        path:'/Support',
        icon: <IoIcon.IoMdHelpCircle/>,
        cName: 'nav-text'

    },
    {
        title: 'About',
        path:'/',
        icon: <IoIcon.IoMdContact/>,
        cName: 'nav-text'

    },
]