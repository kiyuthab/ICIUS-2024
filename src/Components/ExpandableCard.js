import React from 'react';
import { Card } from 'react-bootstrap';

const ExpandableCard = () => {

  return (
    <>
    <div className='p-5'>
    <Card style={{border: "none"}}>
          <Card.Body>
            <Card.Text style={{
              fontSize: '18px',
              textAlign: "justify"
            }}>
              <p>It is our great honor and pleasure to extend a warm invitation to you for the 20th International Conference on Intelligent Unmanned Systems (ICIUS 2024), which is scheduled to take place in Bandung, Indonesia, from the 21st to the 23rd of August 2024. The conference will feature both onsite and online participation options.</p>

              <p>Our primary goal is to foster an inclusive and respectful conference environment that encourages participation irrespective of ethnicity, nationality and background. We highly value diversity within the community and are committed to bringing this inclusive approach to the conference.</p>

              <p>The International Conference on Intelligent Unmanned Systems (ICIUS) is an annual international series of conferences, with the International Society of Intelligent Unmanned Systems (ISIUS) as the main organizer. ICIUS 2024 is co-organized by the Institut Teknologi Bandung. Having successfully taken place in various countries, 2024 marks the fourth time the conference will be held in Indonesia.</p>

              <p>The conference aims to stimulate interactions among researchers actively engaged in areas related to intelligent unmanned systems. Topics of interest span the field of unmanned and intelligent systems for ground, underwater, aerial, and space applications. This year, we are broadening our focus to encompass smart systems, exploring the integration of artificial intelligence (AI), virtual reality (VR), and the metaverse. Additionally, we are delving into the realms of the Internet of Things (IoT) and featuring an industry-supported exhibition to highlight advancements in these cutting-edge technologies.</p>

              <p>In addition to the outstanding technical program, participants will have the opportunity to enjoy their time in Bandung. Renowned for its cultural richness, historical landmarks, and breathtaking natural surroundings, Bandung promises an unforgettable experience.</p>

              <p>We are excited to welcome you to Bandung in August 2024. We believe that you will not only find great value in this significant scientific event but also relish the vibrant Indonesian culture, diverse cuisine, and warm hospitality.</p>

              <center><h5>Ary Setijadi Prihatmanto, Mochammad Agoes Moelyadi, and Agus Budiyono</h5></center>

              <center><h5>ICIUS 2024 Conference Co-Chairs</h5></center>
            </Card.Text>
          </Card.Body>
    </Card>
    </div>
    </>
    
    // <Card
    //   style={{
    //     cursor: 'pointer',
    //     transition: 'transform 0.3s ease',
    //     transform: expanded ? 'scale(1.1)' : 'scale(1)',
    //   }}
    //   onMouseEnter={() => setExpanded(true)}
    //   onMouseLeave={() => setExpanded(false)}
    // >
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{expanded ? description : description.slice(0, 100) + '...'}</Card.Text>
    //     <Button variant="primary" disabled>
    //       Read More
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
};

export default ExpandableCard;