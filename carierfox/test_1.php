<?php

function insert_as_object(){
    $jsonString=file_get_contents("./json/government_job_short_temp.json");
    $data=json_decode($jsonString,true);
    $locations=array(
        'job_title'=>'Assam Rifles',
        'description'=>'The Assam Rifles is one of the oldest paramilitary forces in India, formed in 1835, and currently operates under the authority of the Indian Ministry of Home Affairs. The primary role of the Assam Rifles is to guard India s eastern border with Myanmar, and the force is also responsible for maintaining law and order, combating insurgency and assisting civil authorities during natural disasters in the region 1.',
        'job_qualification'=>'H.S Level',
        'start_date'=>'02-03-2023',
        'end_data'=>'10-04-2023'
    );
    $data[]=$locations;
    $jsonString=json_encode($data);
    file_put_contents("./json/government_job_short_temp.json",$jsonString);
}

function convert_object_string(){
    $jsonString=file_get_contents("./json/government_job_short_temp.json");
    $data=json_decode($jsonString,true);
    $jsonString=json_encode($data);
    $stringData="government_job_short = '" .$jsonString . "';";
    file_put_contents("./json/government_job_short.json",$stringData);
}
// convert_object_string();
// insert_as_object();
?>
<!-- [{"job_title":"APSC","description":"APSC stands for the Assam Public Service Commission, which is a government agency responsible for conducting recruitment examinations and selecting candidates for various civil service positions in the state of Assam, India.","job_qualification":"Graduate","start_date":"05-03-2023","end_data":"10-03-2023"},{"job_title":"SCERT","description":"The State Council of Educational Research and Training (SCERT) is a government organization responsible for promoting quality education and training programs in India. SCERT provides various job opportunities to candidates who are interested in teaching and education-related fields.","job_qualification":"Graduate","start_date":"08-03-2023","end_data":"12-03-2023"},{"job_title":"Assam Police","description":"Assam Police is the law enforcement agency responsible for maintaining law and order in the state of Assam, India. The department employs a large number of police officers, constables, and other staff to provide security and protection to the citizens of the state.","job_qualification":"H.S Level","start_date":"10-03-2023","end_data":"22-03-2023"},{"job_title":"Assam Rifles","description":"The Assam Rifles is one of the oldest paramilitary forces in India, formed in 1835, and currently operates under the authority of the Indian Ministry of Home Affairs. The primary role of the Assam Rifles is to guard India s eastern border with Myanmar, and the force is also responsible for maintaining law and order, combating insurgency and assisting civil authorities during natural disasters in the region.","job_qualification":"H.S Level","start_date":"11-03-2023","end_data":"22-03-2023"},{"job_title":"Guwahati High Court","description":"The Guwahati High Court is the highest court of law in the state of Assam, India. As an esteemed institution of justice, it offers various job opportunities for individuals who are interested in pursuing a career in the legal field.","job_qualification":"Graduate","start_date":"14-03-2023","end_data":"26-03-2023"},{"job_title":"MHRB","description":"MHRB, or the Medical and Health Recruitment Board, is a government agency responsible for recruiting and hiring healthcare professionals for various positions within the healthcare sector. The board is typically established by the state government or central government of a country and works towards ensuring the availability of qualified healthcare professionals in various medical facilities, such as hospitals, clinics, and health centers.","job_qualification":"Graduate","start_date":"16-03-2023","end_data":"26-03-2023"},{"job_title":"Panchayat and rural","description":"Panchayat and rural jobs refer to employment opportunities that are available in Indias rural areas, primarily in the administrative sector. The term \"Panchayat\" refers to the local self-government body that exists in rural areas in India. It is responsible for providing governance and basic services to the people living in the area.","job_qualification":"Graduate","start_date":"17-03-2023","end_data":"26-03-2023"},{"job_title":"DME","description":"DME, or a Diploma in Mechanical Engineering, is a field of study that focuses on the design, development, production, and maintenance of mechanical systems. A DME job is a career opportunity for individuals who have completed their diploma in mechanical engineering and have gained practical skills and knowledge in the field.","job_qualification":"H.S Level","start_date":"20-03-2023","end_data":"28-03-2023"},{"job_title":"ASB","description":"ASB stands for \"Anti-Social Behaviour\" and an ASB job typically involves working to prevent and address issues of anti-social behavior in a community. The job can be found in a variety of organizations, including local councils, housing associations, and community safety teams.","job_qualification":"H.S Level","start_date":"25-03-2023","end_data":"30-03-2023"}] -->