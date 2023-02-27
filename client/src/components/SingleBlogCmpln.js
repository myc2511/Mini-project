import React from "react";
// import img from './img/arrow-up-solid.svg';
function SingleBlogCmpln(){

return(

    <div className="container mx-auto w-4/6">
        <div className="p-2 border-2 m-5 rounded-2xl border-custom-grey cmpln ">
        <a href="/SingleComplaint" className="no-underline hover:underline p-4 inline-block text-3xl text-custom-blue " >Title</a>
        <span className="  rounded-full pl-2 pr-2 mt-2 mr-3 text-lg  float-right border-2 border-custom-grey">Public</span>
        <span className='pl-4  text-sm block'>Ticket No: </span>
        <p className="pl-4 text-sm mt-1">Complain Related: Hostel</p>

        <p className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam illum, sunt magnam enim doloremque autem, porro asperiores nihil maiores, voluptate repudiandae labore quis repellendus? Temporibus nobis voluptas quis enim? ores nihil maiores, </p>
       
        <span className="m-4 inline-block text-sm">Date at Time</span>
        <span className="float-right  m-3 inline-block">Status: Accepted </span>
        
    </div>
    </div>
)
}
export default SingleBlogCmpln