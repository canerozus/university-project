import { v4 as uuidv4 } from "uuid";

const universityData = [
  {
    name: "Bilkent University",
    logo: "https://w3.bilkent.edu.tr/logo/ing-amblem.png",
    bg: "https://www.remzihoca.com/storage/contents/1600171821-757171.jpg",
    clubs: [
      {
        clubImg:
          "https://pbs.twimg.com/profile_images/480050296702259200/mag5F_xR_400x400.png",
        clubName: "MT Bilkent",
        type: "Club",
        school: "Bilkent University",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        contact: {
          contactImg:
            "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
          contactName: "Lorem Ipsum",
          contactDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        announcements: [
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
        ],
        acceptOthers: true,
      },
      {
        clubImg:
          "https://pbs.twimg.com/profile_images/1083258175963447296/ZBxRqk5o_400x400.jpg",
        clubName: "Outdoor Sports",
        type: "Club",
        school: "Bilkent University",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        contact: {
          contactImg:
            "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
          contactName: "Lorem Ipsum",
          contactDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        announcements: [
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
        ],
        acceptOthers: true,
      },
      {
        clubImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fDnrffcoVUYZBH_WLWJg72n4QXuf_K3ZDQ&usqp=CAU",
        clubName: "Google Developer Student Clubs",
        type: "Club",
        school: "Bilkent University",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        contact: {
          contactImg:
            "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
          contactName: "Lorem Ipsum",
          contactDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        announcements: [
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
        ],
        acceptOthers: true,
      },
    ],
  },
  {
    name: "Istanbul Technical University",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Istanbul_Technical_University_emblem.svg/1200px-Istanbul_Technical_University_emblem.svg.png",
    bg: "https://www.remzihoca.com/storage/contents/1600952265-962331.jpg",
    clubs: [
      {
        clubImg:
          "https://yt3.ggpht.com/ytc/AKedOLTYHv-q5_DSi0zRGNOS9KZZte6j0K4MONB8bWtdkQ=s900-c-k-c0x00ffffff-no-rj",
        clubName: "MT ITU",
        type: "Club",
        school: "Istanbul Technical University",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        contact: {
          contactImg:
            "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
          contactName: "Lorem Ipsum",
          contactDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        announcements: [
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
        ],
        acceptOthers: true,
      },
      {
        clubImg:
          "https://mir-s3-cdn-cf.behance.net/project_modules/fs/85b79097876423.5ed46890ad61a.png",
        clubName: "English Speaking Club",
        type: "Club",
        school: "Istanbul Technical University",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        contact: {
          contactImg:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
          contactName: "Lorem Ipsum",
          contactDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        announcements: [
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
        ],
        acceptOthers: false,
      },
      {
        clubImg:
          "https://itukuluplerbirligi.com/wp-content/uploads/2019/11/itubees-logo1.png",
        clubName: "ITU Bees",
        type: "Club",
        school: "Istanbul Technical University",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        contact: {
          contactImg:
            "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
          contactName: "Lorem Ipsum",
          contactDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        announcements: [
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
          {
            announcmentDesc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            sent: new Date(),
          },
        ],
        acceptOthers: false,
      },
    ],
  },
];
export default universityData;
