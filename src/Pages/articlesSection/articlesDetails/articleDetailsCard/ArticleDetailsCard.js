import {  HomeIcon, LanguageIcon, LinkIcon, ListBulletIcon, MoonIcon, ShareIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import DemoWritter from '../../../Home/DemoWritter';

const ArticleDetailsCard = ({articleData}) => {
    const {articleDetails,articleImg,articleRead,articleSubmitDate,articleTitle,writerImg,writerName,_id} = articleData;
    return (
      <div>
        {/* card */}
        <article className="  p-4">
  <div className='blogHadedr lg:flex md:flex-row sm:flex-row  justify-between'>
    {/*card left side writter info */}
    <div className="flex items-center mb-3 ">
    <img
      alt="Developer"
      src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      className="h-16 w-16 rounded-full object-cover"
    />

    <div className="ml-3">
      <h3 className="text-lg font-medium text-black">Claire Mac</h3>

      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap">
          <li className="p-1 leading-none">
            <span  className="text-xs font-medium text-gray-600"> Sep 22, 2022</span>
          </li>

          <li className="p-1 leading-none">
            <span className="text-xs font-medium text-gray-600"> 10 min read</span>
          </li>

          <li className="p-1 leading-none">
            <span className="text-xs font-medium text-gray-600">Member-only</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/*  card right side writter socials */}
  {/* <div  className=" flex gap-5  rounded-md border bg-white text-center"> */}
  <ul
          className="flex justify-start col-span-2 gap-6 lg:col-span-5 lg:justify-end"
        >
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 transition hover:text-black"
            >
              <span className="sr-only">Facebook</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 transition hover:text-black"
            >
              <span className="sr-only">Instagram</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 transition hover:text-black"
            >
              <span className="sr-only">Twitter</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
          <a href="/" className="text-gray-500 transition hover:text-black">
              <LinkIcon className="h-6 w-6  text-gray "/>
              </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 transition hover:text-black text-xl"
            >...             
            </a>
          </li>
        </ul>
  
{/* </div> */}

  </div>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="/"className="block h-full  p-4">
        <strong className=" text-3xl font-bold  text-black">10 Mental Models for Learning Anything</strong>

        <p className="mt-1 text-xl font-medium text-gray-700 leading-relaxed">
     A mental model is a general idea that can be used to explain many different phenomena. Supply and demand in economics,
      natural selection in biology, recursion in computer science, or proof by induction in mathematics — these models are 
      everywhere once you know to look for them.

Just as understanding supply and demand helps you reason about economics problems, understanding mental models of learning will make it easier to think about learning problems.

Unfortunately, learning is rarely taught as a class on its own — meaning most of these
        </p>
        <p className="mt-1 text-xl font-medium text-gray-700 leading-relaxed">
     A mental model is a general idea that can be used to explain many different phenomena. Supply and demand in economics,
      natural selection in biology, recursion in computer science, or proof by induction in mathematics — these models are 
      everywhere once you know to look for them.

Just as understanding supply and demand helps you reason about economics problems, understanding mental models of learning will make it easier to think about learning problems.

Unfortunately, learning is rarely taught as a class on its own — meaning most of these
        </p>
      </a>
    </li>   
  </ul>
  {/* bottom link */}
  <div>
  
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-5">
       <div className=''>
         {/* <p className="text-xs text-left text-gray-500"> */}
         <button className="text-gray-500 hover:text-black " >
  <Link className=" ">
      <LanguageIcon className="h-6 w-6  text-gray "/>
        </Link>
  </button>
        {/* </p> */}
        <button className="text-gray-500 hover:text-black ml-6" >
  <Link className=" ">
      <HomeIcon className="h-6 w-6  text-gray "/>
        </Link>
  </button>
       </div>

        <nav aria-label="Footer Navigation - Support">
          <ul className="flex flex-wrap justify-start gap-4 text-xs lg:justify-end">
            <li>
              <a href="/" className="text-gray-500 transition hover:opacity-75">
              <ShareIcon className="h-6 w-6  text-gray "/>
              </a>
            </li>

            <li>
              <a href="/" className="text-gray-500 transition hover:opacity-75">
              <LinkIcon className="h-6 w-6  text-gray "/>
              </a>
            </li>

            <li>
              <a href="/" className="text-gray-500 transition hover:opacity-75">
              <MoonIcon className="h-6 w-6  text-gray "/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="pt-8 mt-8 border-t border-gray-500">
    </div>
{/*  more store*/}
<div className='bg-gray-100'>
<div className='py-4 px-2'>
<h1 className='text-xl font-bold text-gray-900'>More from Alfred I.</h1>
<p>Top Writer in Self Improvement | Here to help you live and think better. Reach out: alfredeye@tutamail.com</p>
<DemoWritter></DemoWritter>
</div>
</div>

{/*  more store*/}
  </div>
</article>

      </div>
    );
};

export default ArticleDetailsCard;
