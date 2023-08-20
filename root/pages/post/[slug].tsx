import { GetStaticProps } from 'next'
import Header from '../../Components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Head from 'next/head'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

function PostPage({ post }: Props) {
//   console.log(post);

  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // console.log(data);
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }

  return (
    <main  className='relative overflow-clip'>
      <div className='hidden md:inline-block absolute w-72 h-72 bg-purple-500 rounded-full top-[130vh] -left-32 opacity-80 blur-sm'></div>
      <div className='hidden md:inline-block absolute w-72 h-72 bg-gray-500 rounded-full top-[260vh] -right-40 opacity-80 blur-sm'></div>
      <div className='hidden md:inline-block absolute w-72 h-72 bg-orange-500 rounded-full top-[230vh] -left-28 mix-blend-multiply opacity-50 blur-sm'></div>
      <div className='hidden md:inline-block absolute w-72 h-72 bg-pink-300 rounded-full top-[160vh] -right-20 mix-blend-multiply opacity-80 blur-sm'></div>
      {/* <div className='hidden md:inline-block absolute w-72 h-72 bg-orange-500 rounded-full top-[50vh] -left-28 mix-blend-multiply opacity-80 blur-sm'></div> */}
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

    
      <section className="text-gray-600 my-auto body-font">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover border-2 object-center rounded" alt="hero"  src={urlFor(post.mainImage).url()!}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
       <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="text-xl font-light text-gray-500">{post.description}</h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt=""
          />
          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="mt-10">
          {<PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET! || "production"}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "28i481dx"}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
              // image: (props: any) => (
              //   <img {...props} className="w-full flex-1 items-center" />
              // )
            }}
          />}
        </div>
      </article>
    </div>
  </div>
</section>





      <hr className="my-4 mx-auto max-w-lg border border-yellow-500" />

      {submitted ? (
        <div className="my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white">
          <h3 className="text-3xl font-bold">
            Thank You for submitting your comment!
          </h3>
          <p>Once it has been approved,it will appear below!!!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
        >
          <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="mt-2 py-3" />

          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post._id}
          />

          <label className="mb-5 block">
            <span className="text-gray-700">Name</span>
            <input
              {...register('name', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Mailer Daemon"
              type="text"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700">Email</span>
            <input
              {...register('email', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="MD@mailer-daemon.com"
              type="email"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700">Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Enter your comment here..."
              rows={8}
            />
          </label>
          {/* errors */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">The Name Field is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">The Email Field is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                The Comment Field is required
              </span>
            )}
          </div>
          <input
            className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
            type="submit"
          />
        </form>
      )}
      <div className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-yellow-500">
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2" />
        {post.comments.map((comment) => {
          return (
            <div key={comment._id}>
              <p>
                <span className="text-yellow-500">{comment.name}:</span>
                {comment.comment}
              </p>
            </div>
          )
        })}
      </div>

      <footer className="text-gray-600 body-font">
  <div className="container px-5 pt-20 pb-8 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Contact us</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 text-md hover:text-gray-800" href="https://www.facebook.com/MDiitism/" target="_blank" ><p  className='text-blue-400'>Facebook-</p>Mailer Daemon, IIT ISM Dhanbad</a>
          </li>
          <li>
            <a className="text-gray-600 text-md hover:text-gray-800" href="https://www.instagram.com/md_iit_dhanbad/?hl=en" target="_blank"><p className='text-pink-400'>Instagram-</p>md_iit_dhanbad</a>
          </li>
          <li>
            <a className="text-gray-600 text-md hover:text-gray-800" href="https://www.youtube.com/c/MailerDaemonIITISMDhanbad" target="_blank"><p className='text-red-600'>Youtube-</p>Mailer Daemon , IIT ISM Dhanbad</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Products</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://play.google.com/store/apps/details?id=com.mailerdaemon.app&hl=en_IN&gl=US" target="_blank" >md App</a>
          </li>
          {/* <li>
            <a className="text-gray-600 hover:text-gray-800">Ismgram App</a>
          </li> */}
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://placementor-iit-dhanbad.onrender.com" target="_blank">Placementor website</a>
          </li>
          {/* <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li> */}
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Any Suggestions!!</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            {/* <label for="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label> */}
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 w-50 md:w-96 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">It's news till it's new.
          <br className="lg:block hidden"/>All of you are our first priority.
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <img src={`/unnamed.png`} alt="" className="w-13 h-12 rounded-xl text-grey-100"  />
        <span className="ml-3 text-xl">Mailer Daemon</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2004 MailerDaemon —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@StudentBody of IIT(ISM)</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500" href="https://www.facebook.com/MDiitism/" target="_blank">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
       
        <a className="ml-3 text-gray-500" href="https://www.instagram.com/md_iit_dhanbad/?hl=en" target="_blank">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
       
        <a className="ml-3 text-gray-500" href="https://www.youtube.com/c/MailerDaemonIITISMDhanbad" target="_blank">

          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 28">
          <path stroke="none" d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
            
          </svg>
        </a>
      </span>
    </div>
  </div>
  </footer>



    </main>
  )
}

export default PostPage

export const getStaticPaths = async () => {
  const query = `*[_type=="post"]{
  _id,
  slug {
    current
}
 }`
  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type=="post" && slug.current==$slug][0]{
  _id,
  _createdAt,
  title,
  author->{
  name,
  image
},
'comments':*[
  _type=="comment" &&
  post._ref == ^._id && 
  approved == true
],
description,
mainImage,
slug,
body
 }`
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
    revalidate: 60, //after 60 seconds
  }
}
