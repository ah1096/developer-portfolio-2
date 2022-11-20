import AIprofilePic from './images/headshot.jpg';
const profilePic = {
    name: 'AIprofilePic',
    imageUrl: AIprofilePic,
    imageHeight: 300,
    imageWidth: 300,
};


export default function AboutMe(){
    return(
<div>
    <div className="px-4 py-5 my-5 ">

    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse  g-5 py-5">

            <div className="col-10 col-sm-8 col-lg-6">
                <img className="d-block mx-lg-auto img-fluid" 
                    loading="lazy" 
                    alt="my profile photo from Awesome Inc" 
                    src= {profilePic.imageUrl}
                    style={{
                        width: profilePic.imageWidth,
                        height: profilePic.imageHeight
                        }}
                ></img>
            </div>

            <div className="col-lg-6">

                <h1 className="display-5 fw-bold lh-1 mb-3" id="AboutSection">About Me</h1>
                    <div>
                        <p>Hi! My name is Alyssa, and I enjoy developing web applications.</p>
                        <p>Perfectly dust; grievous decaying charm. Aquiline form heavy-hearted state basement 
                            I fear that ill health? Vault abandon fall relic doorstep providence perfume allurem
                            nt suffocating pendulum disquiet. Cartilaginous coach and six stricken suffocating da
                        </p>
                        <p>Some of the technologies and languages I've worked with include:</p>
                    </div>

                    <ul id="skill-list">
                        <li>Javascript</li>
                        <li>HTML & CSS</li>
                        <li>Python</li>
                        <li>ReactJS</li>
                        <li>Django</li>
                        <li>Bootstrap</li>
                    </ul>
            </div>
        </div>
        </div>
    </div>
</div>




    )
}