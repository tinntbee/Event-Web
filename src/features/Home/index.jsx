import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import EventBox from "../../components/EventBox";

Home.propTypes = {};

function Home(props) {
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
        {
          _id: 3,
          name: "Tạ Thị Mai Hương",
          avatar:
            "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/248335830_1774625916062405_3198248670274339321_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VVGHWsBPIHQAX-qS-x9&_nc_ht=scontent.fvca1-4.fna&oh=e98dd8511023d0a3f41edf142d4802ac&oe=61A516F8",
        },
        {
          _id: 4,
          name: "Võ Trần Minh Quân",
          avatar:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/244641786_2687965474830740_3330566472857655919_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WZNiFPp-WtUAX9xT2M1&_nc_oc=AQmjMb_LyKtlv_GBRGJGZJQ9WjV5fjlzkvL93EqdAcWo2orcB9i_wrzZbLLvMdxbTlijhymuk_Rn_WWReGOfGqBB&_nc_ht=scontent.fvca1-1.fna&oh=6600f2c592559d94c8d164391dbfe0a8&oe=61A54D9C",
        },
      ],
    },
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
        {
          _id: 3,
          name: "Tạ Thị Mai Hương",
          avatar:
            "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/248335830_1774625916062405_3198248670274339321_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VVGHWsBPIHQAX-qS-x9&_nc_ht=scontent.fvca1-4.fna&oh=e98dd8511023d0a3f41edf142d4802ac&oe=61A516F8",
        },
        {
          _id: 4,
          name: "Võ Trần Minh Quân",
          avatar:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/244641786_2687965474830740_3330566472857655919_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WZNiFPp-WtUAX9xT2M1&_nc_oc=AQmjMb_LyKtlv_GBRGJGZJQ9WjV5fjlzkvL93EqdAcWo2orcB9i_wrzZbLLvMdxbTlijhymuk_Rn_WWReGOfGqBB&_nc_ht=scontent.fvca1-1.fna&oh=6600f2c592559d94c8d164391dbfe0a8&oe=61A54D9C",
        },
      ],
    },
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
        {
          _id: 3,
          name: "Tạ Thị Mai Hương",
          avatar:
            "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/248335830_1774625916062405_3198248670274339321_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VVGHWsBPIHQAX-qS-x9&_nc_ht=scontent.fvca1-4.fna&oh=e98dd8511023d0a3f41edf142d4802ac&oe=61A516F8",
        },
        {
          _id: 4,
          name: "Võ Trần Minh Quân",
          avatar:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/244641786_2687965474830740_3330566472857655919_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WZNiFPp-WtUAX9xT2M1&_nc_oc=AQmjMb_LyKtlv_GBRGJGZJQ9WjV5fjlzkvL93EqdAcWo2orcB9i_wrzZbLLvMdxbTlijhymuk_Rn_WWReGOfGqBB&_nc_ht=scontent.fvca1-1.fna&oh=6600f2c592559d94c8d164391dbfe0a8&oe=61A54D9C",
        },
      ],
    },
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
        {
          _id: 3,
          name: "Tạ Thị Mai Hương",
          avatar:
            "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/248335830_1774625916062405_3198248670274339321_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VVGHWsBPIHQAX-qS-x9&_nc_ht=scontent.fvca1-4.fna&oh=e98dd8511023d0a3f41edf142d4802ac&oe=61A516F8",
        },
        {
          _id: 4,
          name: "Võ Trần Minh Quân",
          avatar:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/244641786_2687965474830740_3330566472857655919_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WZNiFPp-WtUAX9xT2M1&_nc_oc=AQmjMb_LyKtlv_GBRGJGZJQ9WjV5fjlzkvL93EqdAcWo2orcB9i_wrzZbLLvMdxbTlijhymuk_Rn_WWReGOfGqBB&_nc_ht=scontent.fvca1-1.fna&oh=6600f2c592559d94c8d164391dbfe0a8&oe=61A54D9C",
        },
      ],
    },
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
        {
          _id: 3,
          name: "Tạ Thị Mai Hương",
          avatar:
            "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/248335830_1774625916062405_3198248670274339321_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VVGHWsBPIHQAX-qS-x9&_nc_ht=scontent.fvca1-4.fna&oh=e98dd8511023d0a3f41edf142d4802ac&oe=61A516F8",
        },
        {
          _id: 4,
          name: "Võ Trần Minh Quân",
          avatar:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/244641786_2687965474830740_3330566472857655919_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WZNiFPp-WtUAX9xT2M1&_nc_oc=AQmjMb_LyKtlv_GBRGJGZJQ9WjV5fjlzkvL93EqdAcWo2orcB9i_wrzZbLLvMdxbTlijhymuk_Rn_WWReGOfGqBB&_nc_ht=scontent.fvca1-1.fna&oh=6600f2c592559d94c8d164391dbfe0a8&oe=61A54D9C",
        },
      ],
    },
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
        {
          _id: 3,
          name: "Tạ Thị Mai Hương",
          avatar:
            "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/248335830_1774625916062405_3198248670274339321_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VVGHWsBPIHQAX-qS-x9&_nc_ht=scontent.fvca1-4.fna&oh=e98dd8511023d0a3f41edf142d4802ac&oe=61A516F8",
        },
        {
          _id: 4,
          name: "Võ Trần Minh Quân",
          avatar:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/244641786_2687965474830740_3330566472857655919_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WZNiFPp-WtUAX9xT2M1&_nc_oc=AQmjMb_LyKtlv_GBRGJGZJQ9WjV5fjlzkvL93EqdAcWo2orcB9i_wrzZbLLvMdxbTlijhymuk_Rn_WWReGOfGqBB&_nc_ht=scontent.fvca1-1.fna&oh=6600f2c592559d94c8d164391dbfe0a8&oe=61A54D9C",
        },
      ],
    },
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
        {
          _id: 3,
          name: "Tạ Thị Mai Hương",
          avatar:
            "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/248335830_1774625916062405_3198248670274339321_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VVGHWsBPIHQAX-qS-x9&_nc_ht=scontent.fvca1-4.fna&oh=e98dd8511023d0a3f41edf142d4802ac&oe=61A516F8",
        },
        {
          _id: 4,
          name: "Võ Trần Minh Quân",
          avatar:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/244641786_2687965474830740_3330566472857655919_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WZNiFPp-WtUAX9xT2M1&_nc_oc=AQmjMb_LyKtlv_GBRGJGZJQ9WjV5fjlzkvL93EqdAcWo2orcB9i_wrzZbLLvMdxbTlijhymuk_Rn_WWReGOfGqBB&_nc_ht=scontent.fvca1-1.fna&oh=6600f2c592559d94c8d164391dbfe0a8&oe=61A54D9C",
        },
      ],
    },
  ];
  const fetchData = async () => {
    fetch("http://localhost:2000/event", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  fetchData();
  return (
    <div className="home">
      <div className="home__header">
        <p>Kết quả tìm kiếm</p>
      </div>
      <div className="home__body">
        {data &&
          data.map((item, index) => {
            return (
              <div className="home__body__event-box">
                <EventBox data={item} key={index} />
              </div>
            );
          })}
      </div>
      <button className="more">Xem thêm</button>
    </div>
  );
}

export default Home;
