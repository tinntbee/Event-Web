import React from 'react';
import EventBox from "../../components/EventBox";
import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react-router-dom';

MyEventsFeature.propTypes = {
    
};

function MyEventsFeature(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const data = [
        {
            thumbnail:
                "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/257464339_3109708449259622_2410193694200403801_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=eU6XRTsS6ecAX8mPoDI&tn=j7LpXkDUmE8O4tks&_nc_ht=scontent.fvca1-4.fna&oh=bc9b4ed2f863930914848c489f5cac9e&oe=61A2BB31",
            avatarHost:
                "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/259520658_3111180589112408_3963736788354818155_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=d0-waFdz03UAX-P1F6C&_nc_ht=scontent.fvca1-1.fna&oh=e3bca41d27c47528dbe8425b7d7c4929&oe=61A35697",
            title: "CUỘC THI LẬP TRÌNH BECOD3R NĂM 2021",
            description:
                "Cuộc thi học thuật với cái tên hoàn toàn mới mẻ 'beCod3r' sẽ đổ bộ và hứa hẹn là sân chơi bổ ích, thú vị mà không kém phần hấp dẫn",
            host: "GDSC - HCMUTE",
            status: "Đang diễn ra",
            time: "18/11/2021 - 25/11/2021",
            totalSubscriber: 5,
            subscribers: [
                {
                _id: 1,
                name: "Nguyễn Trung Tín",
                avatar:
                    "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/240581367_3138938299764392_2228439304544764616_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qSob44iAQH0AX_tGgEP&_nc_ht=scontent.fvca1-4.fna&oh=12eaa11b27c2fd1a60d36f8a3beb6215&oe=61A3B7AD",
                },
                {
                _id: 2,
                name: "Huỳnh Thị Thúy Vy",
                avatar:
                    "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-1/c50.0.200.200a/p200x200/222329765_1274087599690359_3291949983149568801_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=-ePEMijprOYAX9sMVS9&_nc_ht=scontent.fvca1-4.fna&oh=5f106028fede103b9277f257ea0bba24&oe=61A3B6AC",
                },
            ],
        },
    ];
    return (
        <div className='myevents myevents-list'>
            <div className="Sidebar">
                <h2 className="Title">Host Page</h2>
                <ul>
                <Link to="/">
                    <li>
                    <button>Host Information</button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                    <button>Events</button>
                    </li>
                </Link>
                </ul>
            </div>

            <div className='main-body'>
                <div className='myevents-header'>
                    <p>Tìm kiếm</p> 
                </div>

                <div className='myevents-body'>
                    <div className='myevents-checkbox'>
                        <input type="checkbox" id="checkbox" name="event-checkbox" value=""            
                        checked={isChecked}
                        onChange={handleOnChange}/>
                    </div>

                    {data && data.map((item, index) => {
                        return (
                        <div className="event-box">
                            <EventBox data={item} key={index} />
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MyEventsFeature;