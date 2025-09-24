import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
    ShoppingBag,
    Users,
    TrendingUp,
    BarChart3,
    Menu,
    X,
    Phone,
    Mail,
    MapPin
} from "lucide-react";

const navigationItems = [{
        title: "Order Food",
        url: createPageUrl("CustomerOrders"),
        icon: ShoppingBag,
    },
    {
        title: "Partners",
        url: createPageUrl("DeliveryPartners"),
        icon: Users,
    },
    {
        title: "Pricing Control",
        url: createPageUrl("SurgeControl"),
        icon: TrendingUp,
    },
    {
        title: "Analytics",
        url: createPageUrl("LiveAnalytics"),
        icon: BarChart3,
    }
];

export default function Layout({ children, currentPageName }) {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return ( <
        div className = "min-h-screen bg-white" >
        <
        style > { `
        :root {
          --primary-orange: #FF6B35;
          --primary-orange-dark: #E85A2B;
          --primary-orange-light: #FFF5F2;
          --text-dark: #1A1A1A;
          --text-light: #666666;
        }
      ` } < /style>

        { /* Header */ } <
        header className = "bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <
        div className = "flex justify-between items-center h-16" > { /* Logo */ } <
        div className = "flex items-center" >
        <
        Link to = { createPageUrl("CustomerOrders") }
        className = "flex items-center space-x-3" >
        <
        div className = "w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center" >
        <
        ShoppingBag className = "w-6 h-6 text-white" / >
        <
        /div> <
        div >
        <
        h1 className = "text-2xl font-bold text-gray-900" > QuickEats < /h1> <
        p className = "text-xs text-orange-600 font-medium" > Dynamic Pricing System < /p> <
        /div> <
        /Link> <
        /div>

        { /* Desktop Navigation */ } <
        nav className = "hidden md:flex space-x-8" > {
            navigationItems.map((item) => ( <
                Link key = { item.title }
                to = { item.url }
                className = { `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.url
                      ? 'bg-orange-50 text-orange-700 border border-orange-200'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }` } >
                <
                item.icon className = "w-4 h-4" / >
                <
                span > { item.title } < /span> <
                /Link>
            ))
        } <
        /nav>

        { /* Mobile menu button */ } <
        div className = "md:hidden" >
        <
        button onClick = {
            () => setMobileMenuOpen(!mobileMenuOpen) }
        className = "p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors" >
        { mobileMenuOpen ? < X className = "w-6 h-6" / > : < Menu className = "w-6 h-6" / > } <
        /button> <
        /div> <
        /div>

        { /* Mobile Navigation */ } {
            mobileMenuOpen && ( <
                div className = "md:hidden border-t border-gray-100 py-4" >
                <
                div className = "space-y-2" > {
                    navigationItems.map((item) => ( <
                        Link key = { item.title }
                        to = { item.url }
                        onClick = {
                            () => setMobileMenuOpen(false) }
                        className = { `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === item.url
                        ? 'bg-orange-50 text-orange-700 border-l-4 border-orange-500'
                        : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                    }` } >
                        <
                        item.icon className = "w-5 h-5" / >
                        <
                        span className = "font-medium" > { item.title } < /span> <
                        /Link>
                    ))
                } <
                /div> <
                /div>
            )
        } <
        /div> <
        /header>

        { /* Main Content */ } <
        main className = "flex-1" > { children } <
        /main>

        { /* Footer */ } <
        footer className = "bg-gray-900 text-white" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" >
        <
        div className = "grid grid-cols-1 md:grid-cols-4 gap-8" > { /* Company Info */ } <
        div className = "col-span-1 md:col-span-2" >
        <
        div className = "flex items-center space-x-3 mb-4" >
        <
        div className = "w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center" >
        <
        ShoppingBag className = "w-6 h-6 text-white" / >
        <
        /div> <
        div >
        <
        h3 className = "text-xl font-bold" > QuickEats < /h3> <
        p className = "text-sm text-orange-400" > Dynamic Pricing System < /p> <
        /div> <
        /div> <
        p className = "text-gray-300 mb-4 max-w-md" >
        Revolutionary food delivery platform with intelligent surge pricing technology that adapts to real - time demand and supply across Lucknow. <
        /p> <
        div className = "space-y-2" >
        <
        div className = "flex items-center space-x-2 text-sm text-gray-300" >
        <
        MapPin className = "w-4 h-4 text-orange-400" / >
        <
        span > Serving Lucknow, Uttar Pradesh < /span> <
        /div> <
        div className = "flex items-center space-x-2 text-sm text-gray-300" >
        <
        Phone className = "w-4 h-4 text-orange-400" / >
        <
        span > +91 9876543210 < /span> <
        /div> <
        div className = "flex items-center space-x-2 text-sm text-gray-300" >
        <
        Mail className = "w-4 h-4 text-orange-400" / >
        <
        span > hello @quickeats.com < /span> <
        /div> <
        /div> <
        /div>

        { /* Services */ } <
        div >
        <
        h4 className = "text-lg font-semibold mb-4" > Services < /h4> <
        ul className = "space-y-2 text-sm text-gray-300" >
        <
        li > < a href = "#"
        className = "hover:text-orange-400 transition-colors" > Food Delivery < /a></li >
        <
        li > < a href = "#"
        className = "hover:text-orange-400 transition-colors" > Partner Registration < /a></li >
        <
        li > < a href = "#"
        className = "hover:text-orange-400 transition-colors" > Restaurant Onboarding < /a></li >
        <
        li > < a href = "#"
        className = "hover:text-orange-400 transition-colors" > Business Analytics < /a></li >
        <
        /ul> <
        /div>

        { /* Technology */ } <
        div >
        <
        h4 className = "text-lg font-semibold mb-4" > Technology < /h4> <
        ul className = "space-y-2 text-sm text-gray-300" >
        <
        li > < a href = "#"
        className = "hover:text-orange-400 transition-colors" > Real - time Pricing < /a></li >
        <
        li > < a href = "#"
        className = "hover:text-orange-400 transition-colors" > Smart Routing < /a></li >
        <
        li > < a href = "#"
        className = "hover:text-orange-400 transition-colors" > Demand Forecasting < /a></li >
        <
        li > < a href = "#"
        className = "hover:text-orange-400 transition-colors" > API Documentation < /a></li >
        <
        /ul> <
        /div> <
        /div>

        <
        div className = "border-t border-gray-800 mt-8 pt-8" >
        <
        div className = "flex flex-col md:flex-row justify-between items-center" >
        <
        p className = "text-sm text-gray-400" > ©2024 QuickEats.All rights reserved.Built with dynamic surge pricing technology. <
        /p> <
        div className = "flex space-x-6 mt-4 md:mt-0" >
        <
        a href = "#"
        className = "text-sm text-gray-400 hover:text-orange-400 transition-colors" > Privacy Policy < /a> <
        a href = "#"
        className = "text-sm text-gray-400 hover:text-orange-400 transition-colors" > Terms of Service < /a> <
        a href = "#"
        className = "text-sm text-gray-400 hover:text-orange-400 transition-colors" > Support < /a> <
        /div> <
        /div> <
        /div> <
        /div> <
        /footer> <
        /div>
    );
}