import { PiHandsPrayingThin } from "react-icons/pi";
import { IoHeartOutline } from "react-icons/io5";
import { IoMdBus } from "react-icons/io";
import { MdModeEditOutline,MdOutlineLocalAirport } from "react-icons/md";
import { RiArrowDropDownLine,RiArrowDropUpLine  } from "react-icons/ri";
import {useState} from 'react';
import { MdDirectionsRailway } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import './index.css';

const sectionData=[{
    header:'Special Features',
    subHeaders:[{
        title:'Foundation Year',
        data:'500-1000 years old',
    },{
        title:'Sthala Tree',
        data:'',
    },{
        title:'Theertham',
        data:'Palsunai, Padma theertham, Sengothai Sunai, Kannimar Sunai, Pasumani Sunai',
    },{
        title:'Ratham',
        data:'',
    },{
        title:'Architecture',
        data:'Dravidian Architecture',
    },{
        title:'Other Speciality',
        data:'All merciful Lord Ranganatha appears in a standing form facing east pleasing the mind of His devotees.',
    }]
},{
    header:'Sthala Puran',
    subContent:['Maharshi Kalava was in penance for a quite number of years to have the darshan of Lord Narayana.  One Durmadhan, son of a Gandarva Viswasu by name was bathing in the tank with his wives.','Durmadha wandering here and there as a demon saw Maharshi Kalava and began to harass him.  Rishi prayed to Lord Narayana for protection.  Lord granted darshan to Rishi and controlled the demon. ','The other story is that a king Nanda Boopala, ruling this region renounced his kingdom and set out for penance on Lord Narayana.  His son Darma Gupta became the king and was ruling the region righteously.','',''],
},{
    header:'Architecture',
    subContent:['All merciful Lord Ranganatha appears in a standing form facing east pleasing the mind of His devotees.  Thumbikkai Azhwar and Mother grace the devotees from their respective shrines.','The devotee crowd is huge on new moon days and Saturdays.  There are shrines for Lord Vinayaka, Sri Anjaneya and Acharya Sri Ramanuja.'],
},{
    header:'Alankar of Deity',
    subHeaders:[{title:'Dressing the Murtis in Hinduism',data:'Dive into the vibrant world of Hindu temple rituals and traditions surrounding Alankar. Explore the significance of adorning murtis (idols) and the symbolism behind different ornaments.'}]
},{
    header:'Prayers and Benefits',
    subHeaders:[{
        title:'Special Vratas and Prayers',
        data:'Those facing the impact of some curses pray for relief.',
    },{
        title:'Offerings to Deity',
        data:'Devotees perform Tirumanjanam to Lord and Mother with sweet pudding-sarkarai pongal nivedhana.',
    },{
        title:'Stotras and Mantras',
        data:''
    }]
},{
    header:'Festivals',
    subHeaders:[{title:'Maha Shivaratri',data:'Celebrated in honor of Lord Shiva, typically in February/March.'},{title:'Rama Navami',data:''},{title:'Krishna Janmashtami',data:'Birth anniversary of Lord Krishna, observed in August/September.'}]
},{
    header:'Sodasha Upchars',
    subHeaders:[{title:'Asana',data:'Offering a seat for the deity.'},{title:'Madhyam',data:'Offering a holy bath to the deity.'},{title:'Arghya ',data:'Offering water for the deitys ablutions.'}]
},{
    header:'Prasadhas',
    subHeaders:[{title:'Common Prasad Offerings',data:'Laddu, Payasam, Halwa'},{title:'Temple-Specific Prasad',data:''}]
},{
    header:'Social Activities',
    subHeaders:[{
        title:'Annadhan',
        data:''
    },{
        title:'Marriage',
        data:''
    },{
        title:'Ear Boring',
        data:''
    },{
        title:'Head Shave',
        data:''
    },{
        title:'Danaas',
        data:''
    },{
        title:'Education Facilities',
        data:''
    },{
        title:'Social Drives',
        data:''
    },{
        title:'Other Activities',
        data:''
    }]
},{
    header:'Arjita Seva'
}];

const Home=()=>{
  
    const listOfTitles=sectionData.length;
    const [sectionVisibilities, setSectionVisibilities] = useState(Array(listOfTitles.length).fill(false));
    const toggleVisibility = (index) => {
        setSectionVisibilities((prevVisibilities) => {
          const updatedVisibilities = [...prevVisibilities];
          updatedVisibilities[index] = !prevVisibilities[index]; // Toggle state for clicked list
          return updatedVisibilities;
        });
      };

    return(
        <div className=''>
            <img src="https://templesofindia.org/assets/compressed/tofi-banner.jpg" alt="banner" className="temple-banner" />
            <div className='templeview'>
                <div className='templeview-header'>
                    <div className="templeview-header-left">
                        <h3 className="">Udaiyanachi Amman Kovil</h3>
                        <p className="">Udaiyanachi Amman</p>
                    </div>
                    <div className='templeview-header-right'>
                        <span  className='visitedIcon'>
                            <PiHandsPrayingThin />
                            <p className="">Visited</p>
                        </span>
                        <span className='favouriteIcon'>
                            <IoHeartOutline />
                            <p className="">Favourite</p>
                        </span>
                    </div>
                </div>
                <div className='templeview-content'>
                    <div className='templeview-left'>
                        <div className="toggle-small">
                            <span className="direc">
                                <h3>Location</h3>
                                <button className="">Edit Details</button>
                            </span>
                            <p style={{fontWeight:'bold'}} >J4R8+3V2, Udaiyanachi, Tamil Nadu 606305</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.7970607617076!2d79.10517939678958!3d11.637806000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab45b27e4021d3%3A0x5a6c5ed7cbdf7d3!2z4K6H4K6o4K-N4K6k4K-BIOCuleCvi-Cur-Cuv-CusuCvjS4!5e0!3m2!1ste!2sin!4v1711545702790!5m2!1ste!2sin" width="93%" height="200px" title='responsive' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="toggle-small"></iframe>
                        </div>
                        <span className="section-subheader2 toggle-small">
                            <h3>Open Timings</h3>
                            <MdModeEditOutline className="edit-icon" />
                        </span>
                        <p className="toggle-small"> Alldays :{" "}07:00 am - 09:00 pm</p>
                        <span className=" toggle-small section-subheader2">
                            <h3>Pooja Timings</h3>
                            <MdModeEditOutline className="edit-icon" />
                        </span>
                        <p className="toggle-small"> Alldays :{" "}08:00 am - 09:00 am</p>
                        <ul>
                            {sectionData.map((section,index)=>{
                                return(
                                    <>
                                        <li className="templeview-left-section">
                                            <div className="templeview-left-section-main-content" onClick={()=>toggleVisibility(index)}>
                                                {sectionVisibilities[index]?<RiArrowDropUpLine className="drop-icon" />:<RiArrowDropDownLine className="drop-icon" /> }
                                                <h2 className="templeview-left-section-header">{section.header}</h2>
                                            </div>
                                            <MdModeEditOutline className="edit-icon" />
                                        </li>
                                        {sectionVisibilities[index]&& section.subHeaders && (<div className="section-data">
                                            {section.subHeaders.map((subheader,inde)=>
                                            <>
                                                <h3 className="section-subheader">{subheader?.title}</h3>
                                                <p>{subheader?.data}</p>
                                            </>)}
                                        </div>)
                                        }
                                        {sectionVisibilities[index]&& section.subContent && 
                                            <ul className="subContent">
                                                {section.subContent.map((subcontents,ind)=>
                                                <li className="left-subcontent"> 
                                                    {subcontents}
                                                </li>)}
                                            </ul>}
                                        {sectionVisibilities[index]&& (<hr/>)}
                                    </>
                                )
                            })
                             
                        }
                        </ul>
                    </div>
                    <div className='templeview-right'>
                        <span className="miniheader">
                            <p>Location</p>
                            <MdModeEditOutline className="edit-icon" />
                        </span>
                        <p>View On maps</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.7970607617076!2d79.10517939678958!3d11.637806000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab45b27e4021d3%3A0x5a6c5ed7cbdf7d3!2z4K6H4K6o4K-N4K6k4K-BIOCuleCvi-Cur-Cuv-CusuCvjS4!5e0!3m2!1ste!2sin!4v1711545702790!5m2!1ste!2sin" width="93%" height="200px" title='responsive' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <span className="miniheader">
                            <p>Open Timings</p>
                            <MdModeEditOutline className="edit-icon" />
                        </span>
                        <p className=""> Alldays :{" "}07:00 am - 09:00 pm</p>
                        <span className="miniheader">
                            <p>Pooja Timings</p>
                            <MdModeEditOutline className="edit-icon" />
                        </span>
                        <p className=""> Alldays :{" "}08:00 am - 09:00 am</p>
                        <span className="miniheader">
                            <p>Other Deities</p>
                            <MdModeEditOutline className="edit-icon" />
                        </span>
                        <span className="miniheader">
                            <p>Amenities</p>
                            <MdModeEditOutline className="edit-icon" />
                        </span>
                        <span className="amenitiesContent">
                            <span className="amenitiesData">
                                <IoCheckmark style={{color:'green',height:'25px',width:'26px'}} />{" "}<span>Drinking Water</span><br/>
                            </span>
                            <span className="amenitiesData">
                                <IoCheckmark style={{color:'green',height:'25px',width:'26px'}}  /><span>Pooja Item Shops</span><br/>
                            </span>
                            <span className="amenitiesData">
                                <IoCheckmark style={{color:'green',height:'25px',width:'26px'}}  /><span>Restaurants Nearby</span><br/>
                            </span>
                            <span className="amenitiesData">
                                <IoCheckmark style={{color:'green',height:'25px',width:'26px'}}  /><span> Restroom</span>
                            </span>
                        </span>
                        <span className="miniheader">
                            <p>How to reach?</p>
                            <MdModeEditOutline className="edit-icon" />
                        </span>
                        <div className="reach-header"> 
                            <p>Nearest Bus Station</p>
                            <IoMdBus className="reach-header-icon" />
                        </div>
                        <p style={{textAlign:'start'}}>Gandhipuram</p>
                        <div className="reach-header"> 
                            <p>Nearest Railway Station</p>
                            <MdDirectionsRailway className="reach-header-icon" />
                        </div>
                        <p style={{textAlign:'start'}}>Coimbatore</p>
                        <div className="reach-header"> 
                            <p>Nearest Airport</p>
                            <MdOutlineLocalAirport className="reach-header-icon" />
                        </div>
                        <p style={{textAlign:'start'}}>Coimbatore</p>
                        <span className="miniheader">
                            <p>Contact Details</p>
                            <MdModeEditOutline className="edit-icon" />
                        </span>
                        <span>Name<br/>Phone<br/>+91-94433 48564 <br/></span>
                    </div>
                </div>
            </div>
            <div className="templeview-contributors">
                <hr style={{height: '-2px', borderColor: '#ddd', margin: '10px 0px'}} />
                <div className="" >Contributors</div>
                <hr style={{height: '-2px', borderColor: '#ddd', margin: '10px 0px'}} />
                <div className="" >Comments</div>
            </div>
           <div className="floater"
           ><FcAbout className="floating-icon" /></div> 
        </div>
    )
}

export default Home;