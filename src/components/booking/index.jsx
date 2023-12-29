import React, {useState} from 'react';


const Booking = () => {

     
        const [date, setDate] = useState("");
        const[time, setTime] = useState("");
        const[people, setPeople] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [phone,setPhone] = useState("");
        const [comment, setComment] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
    
    console.log({
        date,
        time,
        people,
        firstName,
        lastName,
        email,
        phone,
        comment,
    });

    setDate("");
    setTime("");
    setPeople("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setComment("");
    };

    return (
        <section id='Book1'>
            <div className='flex justify-center items-center h-[100%] mt-20 ' >
                <div className='flex flex-col'>
                    <div className='text-center mb-[60px]'>
                        <h1 className='text-[42px] font-bold font-head text-[#121110] leading-[90px]'>
                            Booking

                        </h1>

                    </div>
                    <div className='card w-95 bg-white shadow-lg p-5'>
                        <h2 className='text-xl text-[#121110] font-semibold mb-4'>
                            Book a Table

                        </h2>
                        <form onSubmit={handlesubmit} className= "space-y-4">
                            <div className='flex space-x-4'>
                                <div className='flex-1'>
                                    <label htmlFor="date" className='block text-sm font-medium text-gray-600'
                                    
                                    
                                    >Date</label>
                                    <input 
                                    type="date"
                                    id="date"
                                    className='mt-1 p-2 w-full border bg-[#eeeeee] rounded-md'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    />
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="time" 
                                    className='block text-sm font-medium text-gray-600'

                                    >Time</label>
                                    <select id="time"
                                    className='mt-1 p-2 w-full border bg-[#eeeeee] round-md'
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required

                                    
                                    
                                    >
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    


                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="people"
                                className='block text-sm font-medium text-gray-600'
                                
                                >People</label>
                                <select id="people"
                                className='mt-1 p-2 w-full border bg-[#eeeeee] rounded-md'
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                                required
                                
                                
                                >
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Persons</option>
                                    <option value="3">3 Persons</option>
                                    <option value="4">4 Persons</option>
                                    <option value="5">5 Persons</option>
                                    <option value="6">6 Persons</option>


                                </select>

                            </div>
                            {/* Row3  */}
                            <div className='flex space-x-4'>
                                
                                <div className='flex-1'>
                                    <label htmlFor="firstName"
                                    className='block text-sm font-medium text-gray-600'
                                    
                                    
                                    >First Name</label>
                                    <input type="text"
                                    id="firstName"
                                    className='mt-1 p-2 w-full border bg-[#eeeeee] rounded-md'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    
                                    />

                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="lastName"
                                    className='block text-sm font-medium text-gray-600'
                                    
                                    
                                    >Last Name</label>
                                    <input type="text"
                                    id="lastName"
                                    className='mt-1 p-2 w-full border bg-[#eeeeee] rounded-md'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    
                                    />

                                </div>
                                


                            </div>
                            {/* Row4 */}
                            <div className='flex-1'>
                                    <label htmlFor="email"
                                    className='block text-sm font-medium text-gray-600'
                                    
                                    
                                    >Email</label>
                                    <input type="email"
                                    id="email"
                                    className='mt-1 p-2 w-full border bg-[#eeeeee] rounded-md'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    
                                    />

                            </div>
                            <div className='flex-1'>
                                    <label htmlFor="phone"
                                    className='block text-sm font-medium text-gray-600'
                                    
                                    
                                    >Phone</label>
                                    <input type="tel"
                                    id="phone"
                                    className='mt-1 p-2 w-full border bg-[#eeeeee] rounded-md'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    
                                    />

                            </div>
                            {/* Row5 */}
                            <div>
                                <label htmlFor="comments"
                                className='block text-sm font-medium text-gray-600'
                                
                                >Comments (Optional)</label>
                                <textarea 
                                id="comments" 
                                className='mt-1 p-2 w-full border bg-[#eeeeee] rounded-md'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                
                                />


                            </div>
                            <div className='flex justify-center'> 
                            <button
                            type='submit'
                            className='bg-[#ffc300] text-white p-2 rounded-md hover:bg-[#ffd93d]'
                            
                            >
                            Book a Table
                            </button>
                            
                            </div>
                        </form>

                    </div>

                </div>





            </div>
            </section>




    );
}
export default Booking;