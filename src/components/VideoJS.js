import React, { useEffect } from 'react'
import "./Video.scss"
import "bootstrap/dist/css/bootstrap.css";
import VideoPlayer from "react-video-js-player";
import { Col, Container, Row } from 'react-bootstrap';
import VideoMetaData from './videoMetaData/VideoMetaData';
import VideoHorizontal from './videoHorizontal/VideoHorizontal';
import { useParams } from 'react-router-dom';
import {Scrollbars} from "react-custom-scrollbars-2"
import { useState } from 'react';
import MainVideo from './MainVideo'


const VideoJS = () => {

  //Set States
  const [videoId, setVideoId] = useState(1)
  const [videoData, setVideoData] = useState(data[0])

  

  const handleVideoId = (e) => {
     setVideoId(e.target.getAttribute("data-videoid"));
  }

  //get data and set in new state
  useEffect(()=> {
    var newdata = data.find(el => el.id==videoId)
    setVideoData(newdata)
  }, [videoId, videoData])

  // useEffect(()=>{

  // },[videoId, videoData])

console.log(videoId)
console.log(videoData)


  return (
   
      <Row>
        <Col lg={8}>
          <MainVideo key={videoData.id} mid={videoData.id} msrc={videoData.src} mname={videoData.name} mposter={videoData.poster}/>
        <VideoMetaData title={videoData.title} description={videoData.description} />
        </Col>

        
        <Col lg={4}>
        <Scrollbars className='d-flex' style= {{ width: 368, height: 900}}>
        
        {/* <VideoHorizontal />  */}

{
    data.map((user, i)=> {
    return(<VideoHorizontal                 handleVideoId={handleVideoId} 
                                            key={i}
                                            src={user.src}
                                            id={user.id}
                                            name={user.name}
                                            poster={user.poster}
                                              
                                              />
                                              );
                                              })
}
</Scrollbars>
        </Col>
        
      </Row>
  )
}

export default VideoJS

export const data = [{
  id:1,
  name: "Avatar",
  src:"/assets/videos/Video1.mp4",
  poster:"assets/images/Poster1.jpg",
  title:"Avatar: The Way of Water | Official IMAX® Trailer",
  description:"Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive,  and the tragedies they endure. Directed by James Cameron and produced by Cameron and Jon Landau, the film stars Zoe Saldana, Sam Worthington, Sigourney Weaver, Stephen Lang, Cliff Curtis, Joel David Moore, CCH Pounder, Edie Falco, Jemaine Clement and Kate Winslet."
},
  {
  id:2,
  name: "Beast",
  src:"/assets/videos/Video2.mp4",
  poster:"assets/images/Poster2.jpg",
  title:"Beast | Official Trailer",
  description:"Beast - Only In Theaters August 19 Sometimes the rustle in the bushes actually is a monster. Idris Elba (Fast & Furious Presents: Hobbs & Shaw, The Suicide Squad) stars in a pulse-pounding new thriller about a father and his two teenage daughters who find themselves hunted by a massive rogue lion intent on proving that the savannah has but one apex predator.Elba plays Dr. Nate Daniels, a recently widowed husband who returns to South Africa, where he first met his wife, on a long-planned trip with their daughters to a game reserve managed by Martin Battles (Sharlto Copley, Russian Doll series, Maleficent), an old family friend and wildlife biologist. But what begins as a journey of healing jolts into a fearsome fight for survival when a lion, a survivor of blood-thirsty poachers who now sees all humans as the enemy, begins stalking them.",
},
{
  id:3,
  name: "Black Adam",
  src:"/assets/videos/Video3.mp4",
  poster:"assets/images/Poster3.jpg",
  title:"Black Adam – Official Trailer",
  description:"The world needed a hero, it got #BLACKADAM. Only in theaters October 21. From New Line Cinema, Dwayne Johnson stars in the action adventure “Black Adam.”  The first-ever feature film to explore the story of the DC Super Hero comes to the big screen under the direction of Jaume Collet-Serra (“Jungle Cruise”). Nearly 5,000 years after he was bestowed with the almighty powers of the ancient gods—and imprisoned just as quickly—Black Adam (Johnson) is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."

},
{
  id:4,
  name: "Black Panther II",
  src:"/assets/videos/Video4.mp4",
  poster:"assets/images/Poster4.jpg",
  title:"BLACK PANTHER 2: Wakanda Forever (2022) Teaser Trailer | Marvel Studios",
  description:"Here's our 'TEASER TRAILER' concept for Marvel Studios' upcoming movie BLACK PANTHER 2: Wakanda Forever (2022) (More Info About This Video Down Below!) The inspiration behind this video: Namor joining Black Panther: Wakanda Forever gives Marvel the last character it needs to make a proper version of The Defenders in the MCU. According to an unconfirmed report, Mexican actor Tenoch Huerta will be playing the Avenging Son from Marvel Comics in the upcoming Black Panther sequel. If true, that would be huge news. As a character who predates even Captain America himself, Namor the Sub-Mariner is perhaps the biggest Marvel hero who has never been adapted in live-action before. That could finally change if he and the underwater kingdom of Atlantis appear in Black Panther 2 as enemies of Wakanda. In the comics, Namor is a powerful force strong enough to more than hold his own against foes like Thor or Hulk, so he’s sure to be a more than worthy opponent for the movie’s heroes. Considering how important he is to the comics, there’s a good chance that Black Panther 2’s ending will leave the door open for him to return in future MCU projects."
},
{
  id:5,
  name: "Bullet Train",
  src:"/assets/videos/Video5.mp4",
  poster:"assets/images/Poster5.jpg",
  title:"BULLET TRAIN - Official Trailer (HD)",
  description:"Getting back on the job is never as easy as you think... especially with the world's deadliest assassins on board. Take a ride with Brad Pitt in #BulletTrainMovie, exclusively in movie theaters July 29. In Bullet Train, Brad Pitt stars as Ladybug, an unlucky assassin determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe – all with connected, yet conflicting, objectives – on the world's fastest train...and he's got to figure out how to get off. From the director of Deadpool 2, David Leitch, the end of the line is only the beginning in a wild, non-stop thrill ride through modern-day Japan. Directed by: David Leitch. Screenplay by: Zak Olkewicz. Based on the book by: Kotaro Isaka. Produced by: Kelly McCormick, David Leitch, Antoine Fuqua. Cast: Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian Tyree Henry, Andrew Koji, Hiroyuki Sanada, Michael Shannon, Benito A Martínez Ocasio"
},
{
  id:6,
  name: "Intercepter",
  src:"/assets/videos/Video6.mp4",
  poster:"assets/images/Poster6.jpg",
  title:"INTERCEPTOR | Official Trailer | Netflix",
  description:"Meet the world's last defense. One Army captain must use her years of tactical training and military expertise when a simultaneous coordinated attack threatens the remote missile interceptor station she is in command of. Elsa Pataky and Luke Bracey star in INTERCEPTOR, directed by Matthew Reilly. Watch on Netflix June 3. About Netflix: Netflix is the world's leading streaming entertainment service with 222 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments."

},
{
  id:7,
  name: "Minions The Rise of Gru",
  src:"/assets/videos/Video7.mp4",
  poster:"assets/images/Poster7.jpg",
  title:"Minions: The Rise of Gru | Official Trailer",
  description:"This summer, from the biggest global animated franchise in history, comes the origin story of how the world’s greatest supervillain first met his iconic Minions, forged cinema’s most despicable crew and faced off against the most unstoppable criminal force ever assembled in Minions: The Rise of Gru. Long before he becomes the master of evil, Gru (Oscar® nominee Steve Carell) is just a 12-year-old boy in 1970s suburbia, plotting to take over the world from his basement. It’s not going particularly well. When Gru crosses paths with the Minions, including Kevin, Stuart, Bob, and Otto—a new Minion sporting braces and a desperate need to please—this unexpected family joins forces. Together, they build their first lair, design their first weapons, and strive to execute their first missions. When the infamous supervillain supergroup, the Vicious 6, oust their leader—legendary martial arts fighter Wild Knuckles (Oscar® winner Alan Arkin)— Gru, their most devoted fanboy, interviews to become their newest member. The Vicious 6 is not impressed by the diminutive, wannabe villain, but then Gru outsmarts (and enrages) them, and he suddenly finds himself the mortal enemy of the apex of evil. With Gru on the run, the Minions attempt to master the art of kung fu to help save him, and Gru discovers that even bad guys need a little help from their friends. "

},
{
  id:8,
  name: "Mission Impossible",
  src:"/assets/videos/Video8.mp4",
  poster:"assets/images/Poster8.jpg",
  title:"Mission: Impossible – Dead Reckoning Part One | Official Teaser Trailer (2023 Movie)",
  description:"We all share the same fate. Watch the official teaser trailer for #MissionImpossible – Dead Reckoning Part One starring Tom Cruise. Coming to theatres 2023. Paramount Pictures Corporation (PPC), a major global producer and distributor of filmed entertainment, is a unit of Viacom (NASDAQ: VIAB, VIA), home to premier global media brands that create compelling television programs, motion pictures, short-form content, apps, games, consumer products, social media experiences, and other entertainment content for audiences in more than 180 countries."

},
{
  id:9,
  name: "The Man From Toronto",
  src:"/assets/videos/Video9.mp4",
  poster:"assets/images/Poster9.jpg",
  title:"The Man From Toronto | Kevin Hart and Woody Harrelson | Official Trailer | Netflix",
  description:"A case of mistaken identity arises after a screw-up sales consultant and the world’s deadliest assassin—known only as The Man from Toronto— run into each other at a holiday rental. Kevin Hart and Woody Harrelson star in this action packed comedy only on Netflix 6/24. About Netflix: Netflix is the world's leading streaming entertainment service with 222 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments."

},
{
  id:10,
  name: "The Sea Beast",
  src:"/assets/videos/Video10.mp4",
  poster:"assets/images/Poster10.jpg",
  title:"The Sea Beast | Official Trailer | Netflix",
  description:"This monstrous adventure attacks Netflix July 8. From Academy Award winning filmmaker Chris Williams (Moana, Big Hero Six), THE SEA BEAST takes us to where the map ends, and the true adventure begins. Starring Karl Urban, Zaris-Angel Hator, Jared Harris, Marianne Jean-Baptiste, Dan Stevens and Kathy Burke. In an era when terrifying beasts roamed the seas, monster hunters were celebrated heroes - and none were more beloved than the great Jacob Holland. But when young Maisie Brumble stows away on his fabled ship, he’s saddled with an unexpected ally. Together they embark on an epic journey into uncharted waters and make history. About Netflix: Netflix is the world's leading streaming entertainment service with 222 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments."

},
{
  id:11,
  name: "Willow",
  src:"/assets/videos/Video11.mp4",
  poster:"assets/images/Poster11.jpg",
  title:"Willow | Official Teaser Trailer | Disney+",
  description:"This fall, a new adventure begins. ✨ Watch the teaser trailer for #Willow, an Original series streaming November 30, only on #DisneyPlus."

},];