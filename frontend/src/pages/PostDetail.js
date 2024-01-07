import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'

import img1 from '../assets/blog17.jpg'

function PostDetail() {
  return (
    <div className='w-[60%] mx-auto  py-12'>
      <section  className=''>
        <div className=" bg-white rounded-xl p-3 shadow">

          <div className="flex justify-between items-center">
            <PostAuthor/>
            <div className="gap-2 flex">
              <Link to={`/post/id/edit`} className='bg-violet-600 px-2 rounded-md shadow'>
                 Edit
              </Link>
              <Link to={`/post/id/delete`} className='bg-red-500 px-2 rounded-md shadow'>
                 Delete
              </Link>
            </div>
          </div>

        <h1 className='text-4xl font-bold py-2 text-center capitalize'>Post title</h1>
        <div className="w-full pb-4 ">
          <img src={img1} alt="blog image" className='w-full  rounded-lg' />
        </div>
            <div className="w-full">
              <p className='mb-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, pariatur blanditiis nostrum dolorem aliquid repellendus repudiandae quaerat accusamus quis porro omnis officiis, fugit quia amet similique sed at. Sed nostrum facere unde, minus provident aspernatur illum mollitia saepe rem. Voluptatum nulla voluptates, quam numquam nostrum ipsum corporis rerum nam ab?
              </p>
              <p className='mb-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, pariatur blanditiis nostrum dolorem aliquid repellendus repudiandae quaerat accusamus quis porro omnis officiis, fugit quia amet similique sed at. Sed nostrum facere unde, minus provident aspernatur illum mollitia saepe rem. Voluptatum nulla voluptates, quam numquam nostrum ipsum corporis rerum nam ab?
              </p>
              <p className='mb-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, pariatur blanditiis nostrum dolorem aliquid repellendus repudiandae quaerat accusamus quis porro omnis officiis, fugit quia amet similique sed at. Sed nostrum facere unde, minus provident aspernatur illum mollitia saepe rem. Voluptatum nulla voluptates, quam numquam nostrum ipsum corporis rerum nam ab?
              </p>
              <p className='mb-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, pariatur blanditiis nostrum dolorem aliquid repellendus repudiandae quaerat accusamus quis porro omnis officiis, fugit quia amet similique sed at. Sed nostrum facere unde, minus provident aspernatur illum mollitia saepe rem. Voluptatum nulla voluptates, quam numquam nostrum ipsum corporis rerum nam ab?
              </p>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, illo hic! Earum eaque hic necessitatibus dolorem totam corporis asperiores, fuga officiis voluptatibus? Expedita iste ab eveniet nihil sed dolorem repellendus error quia dolores, quod mollitia natus nobis, sequi ducimus impedit fugiat. Voluptatibus et excepturi rem repellendus hic ad veniam repellat non impedit, nobis quae officia incidunt porro accusantium, aperiam minima error magnam similique ratione aliquid numquam? Nulla aliquid ex earum.
              </p>
              <p className='mb-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet at quos veniam officia sequi fugiat enim voluptatum provident, sapiente quia quibusdam aut animi quis ab, perspiciatis distinctio? Quibusdam tempora obcaecati deleniti. Pariatur quia, tempora autem quasi magni laudantium illo quos aperiam. Pariatur tenetur accusamus dolor quaerat? Commodi, praesentium tempore! Quod sit nostrum nesciunt inventore iure assumenda, vero enim minus libero hic ducimus labore accusantium eligendi voluptates quidem similique. Earum dolores error accusamus veritatis quis voluptates, neque facilis corrupti? Sunt aspernatur, quidem officia corporis, cumque, magnam natus repellat voluptate eum corrupti suscipit porro aperiam laboriosam saepe nobis ut quo commodi voluptatem ipsa sequi! Numquam, animi maxime qui reprehenderit praesentium illo blanditiis aspernatur quia vero, placeat libero alias impedit voluptate optio repellendus esse odit. Doloribus adipisci accusamus odio odit perferendis, consequuntur provident. Tenetur, doloribus! Ad, molestiae, doloremque saepe maiores, fuga natus tempore inventore eaque reiciendis quisquam dolorum quod corporis necessitatibus voluptatum recusandae!
              </p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default PostDetail