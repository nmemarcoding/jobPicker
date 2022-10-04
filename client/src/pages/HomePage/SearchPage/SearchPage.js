import React from 'react'
import { Fragment, useState } from 'react'
import {  Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Job from '../../../components/Navbar/job/Job'
import { useLocation } from 'react-router-dom'
import Navbar from '../../../components/Navbar/Navbar'

export default function SearchPage() {
    const sortOptions = [
        { name: 'Most Popular', href: '#', current: true },
        { name: 'Best Rating', href: '#', current: false },
        { name: 'Newest', href: '#', current: false },
        { name: 'Price: Low to High', href: '#', current: false },
        { name: 'Price: High to Low', href: '#', current: false },
      ]
    
    
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
      const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
      const {state} = useLocation(); 
      const [searchData,setSearchData] = useState(state?.searchInfo)
      if(state!=null) {

      }
        
     
     
      
  return (
        <>
        <Navbar/>
        <div className="bg-white"  >
      
      <div  >
        <main className="" style={{overflow: 'hidden' ,padding:"20px"}} >
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{searchData}</h1>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24" >
            

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"style={{display: 'flex',justifyContent:"space-evenly"}} >
        

              {/* Product grid */}
              <div className="lg:col-span-3" >
                {/* Replace with your content */}
                
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full" style={{height: 'auto', }} >
                <div className="flex" style={{flexWrap:"wrap", justifyContent:"space-around" ,padding:"20px"}} >
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/196646094/original/989d6c2939c5304ec5b16a9771e35297a46502b1.jpg" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/234950499/original/c892880f0bc676832ef2ad8c6a1bf550be742056.jpg" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/160465966/original/da77e76b71fad7adde52ea42c9cf15e54cf40626.jpg" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/244455919/original/40c0b4a108b10b8f7cdcd0bf339c0ae1bf8b0aec.png" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/253640896/original/ad708986fde034dfb1f81d61ead2d0cbba84e84b.png" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/152611507/original/cb954436e317ae584167b9c7bed86f67bd0feaaf.png" />
                </div>
            </div>

                </div>
                
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    </>
  )
}
