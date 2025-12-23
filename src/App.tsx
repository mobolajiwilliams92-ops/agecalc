

const App = () => {
  return (
    <div className="bg-blue-200 w-[100%] h-full object-contain text-black flex flex-col pt-20 justify-center item-center py-20">
      <div className="bg-white w-[600px] h-[600px] mx-auto text-center rounded-xl  ">
       <div className="text-2xl flex justify-start font-bold mx-7 my-5">Contact us</div>
       <div className="gap-4 flex flex-row">
        <div className="flex flex-col gap-3">
          <label className="text-xs flex-justify-start mx-7">First name </label>
          <input type="text" 
          className="rounded-xl w-60 h-10 border-1 mx-5"/>
        </div>
         <div className="flex flex-col gap-3">
          <label className="text-xs flex-justify-start mx-7">Last name </label>
          <input type="text" 
          className="rounded-xl w-60 h-10 border-1 mx-5"/>
        </div>
       </div>
               <div className="flex flex-col gap-3">
          <label className="text-xs flex justify-start p-3 mx-8">Email Address</label>
          <input type="text" 
          className="rounded-xl w-140 h-10 border-1 mx-3"/>
        </div>
        <div className="gap-4 flex flex-row">
        <div className="flex flex-col gap-3">
         <label className="text-xs justify-start flex mx-8">Query Type</label>
         <div className="rounded-xl border-1 w-60 h-10 p-5 mx-5 flex justify-start text-xs text-center item-center">
          General Enquiry
         </div>
        </div>
        <div className="rounded-xl border-1 w-60 h-10 p-5 mx-5 my-7 flex justify-start text-xs text-center item-center">
          Support Request
        </div>
        </div>
        <div className="flex flex-col gap-3 ">
         <label className="text-xs justify-start flex mx-8">Message</label>
         <input type="text" 
         className="rounded-xl border-1 w-140 h-20 mx-5 "/>
        </div>
           <p className="text-xs flex justify-start mx-8 my-10">i consent to being contacted by the team</p>
           <div className="bg-green-900 text-white text-sm rounded-xl w-130 h-10 flex justify-center mx-8 text-center p-3 ">Submit</div>
    </div>
    </div>
  )
}

export default App
