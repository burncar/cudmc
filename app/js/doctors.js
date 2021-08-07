const findM = document.querySelector('.find__modal');
const btn = document.querySelector('#myBtn');
const hideme = document.querySelector('.hide-me');
const unhideme = document.querySelector('.unhide-me');
const closeme = document.querySelector('.close');
const modify = document.querySelector('#modify');



const data = [ {"name": "Dr. Barangan, Joan T.", "category": "Regular Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Buenavidez-Lagayan, Tarcilla G.", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Feril, Angelica A.", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Gallaba, Rita Mae J.", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Julian, Rowena S.", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},  
               {"name": "Dr. Merza, Ma. Christine Joy T.", "category": "Attending Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Miguel, Mary Grace", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Pinson-Sulit, Romina Alexis D.", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Revibes, Sherwin F.", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Saludez, Jennifer L.", "category": "Regular Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Salvattiera, Rashelle L.", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr.Sulit, RobertTimothy M.", "category": "Regular Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Tagacay, Jayber L.", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Taguinod, Erwin A.", "category": "Visiting Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Talattag, Xati M.", "category": "Regular Consultant", "specialty": "Anesthesiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},

               {"name": "Dr. Alejandro, Danilo R.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Bajet, Sheryl C.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Batan, Lormie R.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Cabbuag, Ma Angelica P.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Carag, Cecil A.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Cuntapay-Soco, Julleta P.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Dalanao, Evervic Joy G.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Dela Cruz, Ma. Kenneth S.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Galam, Kathleen M.", "category": "Regular Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Hirang-Denola, Belinda G.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr.Jambaro, Marinette R.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr.Jambaro, Marvin Jay G.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Pauig, Maria Angelica", "category": "Regular Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Quinto, Janice Joy C.", "category": "Regular Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Razote, Michael Rey L.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Saniatan, Jaylord S.", "category": "Regular Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Uy, Rogelyn N.", "category": "Regular Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Valencia, Jose Carlo B.", "category": "Visiting Consultant Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Vea Maria Lia M.", "category": "Regular Consultant", "specialty": "Internal Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},

               {"name": "Dr. Arnedo, Raquel S.", "category": "Regular Consultant", "specialty": "Dental Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Callangan, Alvin A.", "category": "Regular Consultant", "specialty": "Dental Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Paz, Minerva S.", "category": "Regular Consultant", "specialty": "Dental Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Punzalan, Ramon V.", "category": "Regular Consultant", "specialty": "Dental Medicine", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},

               {"name": "Dr. Babaran, Ma Christy T", "category": "Visiting Consultant", "specialty": "Cardiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Combate, Valeriano Jr. D.", "category": "Visiting Consultant", "specialty": "Cardiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Soriano, Gretchen Olivia", "category": "Regular Consultant", "specialty": "Cardiology", "rm": " RM 115 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm", "url": "url(/cudmc/id/gretchen_n.jpg)", "appoint": "0965-078-9248 and look for AZ"},
               {"name": "Dr. Ramos, George C.", "category": "Visiting Consultant", "specialty": "Cardiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Montehermoso, Joan R.", "category": "Regular Consultant", "specialty": "Cardiology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},

               {"name": "Dr. Morales Sylvia V.", "category": "Regular Consultant", "specialty": "Dermatology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},

               {"name": "Dr. Mamba Lucy Anne Elumir", "category": "Regular Consultant", "specialty": "Endocrinology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Coral, Lord Byron C.", "category": "Regular Consultant", "specialty": "Gastroentorology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"}, 
               {"name": "Dr. Pagaddu, Gerardo Jr. A.", "category": "Regular Consultant", "specialty": "Gastroentorology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"}, 
               {"name": "Dr. Parallag, Federick L.", "category": "Regular Consultant", "specialty": "Nephrology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Fernandez, Rodolfo Jr.", "category": "Regular Consultant", "specialty": "Oncology", "rm": " RM 112 Medical Arts Complex","schedule": "Mon-Fri 8:00am-4:00pm"}, 

               {"name": "Dr. Chan-Reyes, Honeylet T.", "category": "Regular Consultant", "specialty": "Pulmonology", "rm": " RM 112 Medical Arts Complex",  "schedule": "Mon-Fri 8:00am-4:00pm", "url": "url(/cudmc/id/chan_n.jpg)", "appoint": "0935-687-1362 and look for Yel"},
               {"name": "Dr. Combate, Ma Raul Carmela E.", "category": "Visiting Consultant", "specialty": "Pulmonology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Mata, Janette C.", "category": "Regular Consultant", "specialty": "Pulmonology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr.Pattaguan, Gloria Giselle T.", "category": "Visiting Consultant", "specialty": "Pulmonology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Reyes Delaila P.", "category": "Visiting Consultant", "specialty": "Pulmonology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Reyes, Rhoderick Ian G.", "category": "Visiting Consultant", "specialty": "Pulmonology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},

               {"name": "Dr. Calimag, Vanesssa L.", "category": "Visiting Consultant", "specialty": "Neurology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Lara, Kathreen Jane A", "category": "Visiting Consultant", "specialty": "Neurology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Matila, Rowel S.", "category": "Regular Consultant", "specialty": "Neurology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Sibbaluca Marites T.", "category": "Visiting Consultant", "specialty": "Neurology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Trinidad, Noreen Jhoanna C. Tangcuangco", "category": "Regular Consultant", "specialty": "Neurology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm", "url": "url(/cudmc/id/chan_n.jpg)"},     
              
               {"name": "Dr. Aguirre, Susan T.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Alcantara, Jeliza A.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Bilun, Metchie Gay A.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Calagui-Damaso, Christiana P.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Chua, Grazille G.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Dela Cruz, Carla L.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Ferrer-Banatao, Mildred C.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Gammad, Cheryl Erika C.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Izon-Carag, Kathy B.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Llanto, Marla A.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Palattao, Maricel R.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Pua, Jacqueline B.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Quilang, Edilyn T.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"}, 
               {"name": "Dr.Tuddao, Marivic U.", "category": "Visiting Consultant", "specialty": "Obstetrics-Gynecology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},

               {"name": "Dr. Abogado, Anthony C.", "category": "Visiting Consultant", "specialty": "Orthopedics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Beltran, Manolito Brian A.", "category": "Visiting Consultant", "specialty": "Orthopedics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Cayetano, Angel Jr. A.", "category": "Visiting Consultant", "specialty": "Orthopedics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Lasam, Marco Paulo G.", "category": "Visiting Consultant", "specialty": "Orthopedics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Mamba, Niccolo S.", "category": "Visiting Consultant", "specialty": "Orthopedics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               
               {"name": "Dr. Apaga, Apple Pie Marie M.", "category": "Visiting Consultant", "specialty": "Radiology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Arugay, Ma Angustia Lee", "category": "Visiting Consultant", "specialty": "Radioloy", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Carayugan, Joseph Carlo B.", "category": "Visiting Consultant", "specialty": "Radiology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Centeno, Dominador III M.", "category": "Visiting Consultant", "specialty": "Radioloy", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Costiniano, Rolando", "category": "Visiting Consultant", "specialty": "Radiology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Lapuz, Maureen M.", "category": "Visiting Consultant", "specialty": "Radioloy", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Turingan, Imelda T.", "category": "Visiting Consultant", "specialty": "Radiology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               
               {"name": "Dr. Acosta, Adelina C.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Alejandro, Vilma B.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Anza, Maria Heicielle A.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Baguinon, Jean A.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Banatao, Jocelyn C.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Banatao, Maria Victoria V.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Cabinta, Maria Socorro Z.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Carrera, Teofila P.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Catanauan, Maria Teresa L.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Cumiugad, Monalisa L.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Dimaano, Sally B.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Gaudillo, Chancel C.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Kanapi, Claudine C.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Mallillin, Minerva B.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Mallonga, Marissa P.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Manaligod, Maritoni P.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Palabarica, Frances Rose R.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Parallag, Rema C.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Pasicolan, Jean R.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Ragual-Jambaro, Glady Rose L.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Ramirez, Geraldine Anne S.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Reyes, Sheryl Dell C.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Siazon, Zenaida S.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Solis, Pauline R.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Taquiqui, Grandelee D.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Velarde Magdalena I.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Wangdali, Jerome P.", "category": "Visiting Consultant", "specialty": "Pediatrics", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
            
               {"name": "Dr. Gallebo, Brendalyn A.", "category": "Visiting Consultant", "specialty": "Pathology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Pagaddu, Jane G.", "category": "Visiting Consultant", "specialty": "Pathology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Pua, Marvin John B.", "category": "Visiting Consultant", "specialty": "Pathology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Turingan, Mark Anthony", "category": "Visiting Consultant", "specialty": "Pathology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               
               {"name": "Dr. Baguinon Erwin A.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Beran, Pinky D.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Bielgo, Joseph Roy P.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Cadang, Jhorell S.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Florendo, Gerardo Antonio S.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Gayao, Louie Leonides M.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Lagayan, Jose Jr. U.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Lantano, Louie P.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Merza, Rex P.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Reyes, Allan Bartolome S.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Saure, Jaynee C.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Tiangco, Odessa B.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Velarde, Richard Conrad I.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Wandaga, Bernard L.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Zaldivar, Joan Kristi D.", "category": "Visiting Consultant", "specialty": "Surgery", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               
               {"name": "Dr. Acluba-Pauig, Ann Nuelli B.", "category": "Visiting Consultant", "specialty": "ENT", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Baguisan, Kathleen J.", "category": "Visiting Consultant", "specialty": "ENT", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Battung, Enouel Steve C.", "category": "Visiting Consultant", "specialty": "ENT", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Ramos, Omar A.", "category": "Visiting Consultant", "specialty": "ENT", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               
               {"name": "Dr. Ave, Eliseo George Jr. A.", "category": "Visiting Consultant", "specialty": "Ophthalmology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},

               {"name": "Dr. Calata, Claudette C.", "category": "Visiting Consultant", "specialty": "Urology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Hipolito, Maria Hilda Fe R.", "category": "Visiting Consultant", "specialty": "Urology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Pasco, Randy A.", "category": "Visiting Consultant", "specialty": "Urology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               {"name": "Dr. Torio, john Christopher P.", "category": "Visiting Consultant", "specialty": "Urology", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               
               {"name": "Dr. Lantano, Anna Marie G.", "category": "Visiting Consultant", "specialty": "Psychiatry", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"},
               
               {"name": "Dr. Haban-Jacinto, Estelita Michelle T.", "category": "Visiting Consultant", "specialty": "Physical Medicine and Rehabilitation", "rm": " RM 112 Medical Arts Complex", "schedule": "Mon-Fri 8:00am-4:00pm"}];
               
               // let gastro = ["Dr. Coral, Lord Byron C.", "Dr. Pagaddu, Gerardo Jr. A."] ;

// let nephro = ["Dr. Parallag, Federick L."];

// let onco = ["Dr. Fernandez, Rodolfo Jr."];

// let pulmo = ["Dr. Combate, Ma Raul Carmela E.", "Dr. Mata, Janette C."];

// let neuro = ["Dr. Calimag, Vanesssa L.", "Dr. Matila, Rowel S.", "Dr. Trinidad, Noreen Jhoanna C. Tangcuangco"];

let mi = 0;
let mid=0;

let list = document.getElementById("myList");
let internalMed = document.getElementById("internalMed");
let dentMed = document.getElementById("dentMed");
let Cardio = document.getElementById("Cardio");
let Derma = document.getElementById("Derma");
let Endo = document.getElementById("Endo");
let Gastro = document.getElementById("Gastro");
let Nephro = document.getElementById("Nephro");
let Onco = document.getElementById("Onco");
let Pulmo = document.getElementById("Pulmo");
let Neuro = document.getElementById("Neuro");
let obgyne = document.getElementById("obgyne");
let ortho = document.getElementById("ortho");
let rad = document.getElementById("rad");
let ped = document.getElementById("ped");
let pat = document.getElementById("pat");
let surg = document.getElementById("surg");
let ent = document.getElementById("ent");
let opth = document.getElementById("opth");
let uro = document.getElementById("uro");
let psy = document.getElementById("psy");
let rehab = document.getElementById("rehab");





data.forEach((item) => {
    let ah = document.createElement("button");

  ah.innerText = item.name;
  if(item.specialty == 'Anesthesiology'){
    list.appendChild(ah);
  }else if(item.specialty == 'Internal Medicine'){
    internalMed.appendChild(ah);
  }else if(item.specialty == 'Dental Medicine'){
    dentMed.appendChild(ah);
  }else if(item.specialty == 'Cardiology'){
    Cardio.appendChild(ah);
  }else if(item.specialty == 'Dermatology'){
    Derma.appendChild(ah);
  }else if(item.specialty == 'Endocrinology'){
    Endo.appendChild(ah);
  }else if(item.specialty == 'Gastroentorology'){
    Gastro.appendChild(ah);
  }else if(item.specialty == 'Nephrology'){
    Nephro.appendChild(ah);
  }else if(item.specialty == 'Oncology'){
    Onco.appendChild(ah);
  }else if(item.specialty == 'Pulmonology'){
    Pulmo.appendChild(ah);
  }else if(item.specialty == 'Neurology'){
    Neuro.appendChild(ah);
  }
  else if(item.specialty == 'Obstetrics-Gynecology'){
    obgyne.appendChild(ah);
  }
  else if(item.specialty == 'Orthopedics'){
    ortho.appendChild(ah);
  }
  else if(item.specialty == 'Radiology'){
    rad.appendChild(ah);
  }
  else if(item.specialty == 'Pediatrics'){
    ped.appendChild(ah);
  }
  else if(item.specialty == 'Pathology'){
    pat.appendChild(ah);
  }
  else if(item.specialty == 'Surgery'){
    surg.appendChild(ah);
  }
  else if(item.specialty == 'ENT'){
    ent.appendChild(ah);
  }
  else if(item.specialty == 'Ophthalmology'){
    opth.appendChild(ah);
  }
  else if(item.specialty == 'Urology'){
    uro.appendChild(ah);
  }
  else if(item.specialty == 'Psychiatry'){
    psy.appendChild(ah);
  }
  else if(item.specialty == 'Physical Medicine and Rehabilitation'){
    rehab.appendChild(ah);
  }
});

// intmed.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//   internalMed.appendChild(ah);
// });

// dentmed.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//   dentMed.appendChild(ah);
// });

// cardio.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//   Cardio.appendChild(ah);
// });

// derma.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//   Derma.appendChild(ah);
// });

// endo.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//   Endo.appendChild(ah);
// });

// gastro.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//  Gastro.appendChild(ah);
// });

// nephro.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//  Nephro.appendChild(ah);
// });

// onco.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//  Onco.appendChild(ah);
// });

// pulmo.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//  Pulmo.appendChild(ah);
// });

// neuro.forEach((item, i) => {
//   let ah = document.createElement("button");
//   ah.innerText = item ;
//  Neuro.appendChild(ah);
// });


let buttons = document.querySelectorAll('button');
for (let index = 0; index < buttons.length; ++index) {
    buttons[index].addEventListener('click', e => {

        if(findM.classList.contains('openModal')){
            findM.classList.remove('openModal');
              body.classList.remove('noscroll');

                hideme.classList.remove('unhide');
                hideme.classList.add('hides');
                unhideme.classList.remove('hides');
                unhideme.classList.add('unhide')
            }else
            { 
              unhideme.classList.remove('unhide');
              unhideme.classList.add('hides')
              hideme.classList.remove('hides');
              hideme.classList.add('unhide');
              findM.classList.add('openModal');
              body.classList.add('noscroll');

              var x = document.getElementsByTagName("button")[index].innerText;
              document.getElementById("doctor_name").innerHTML = x;
              document.getElementById("category").innerHTML = data[index].category;
              document.getElementById("specialty").innerHTML = data[index].specialty;
              document.getElementById("schedule").innerHTML = data[index].schedule;
              document.getElementById("room").innerHTML = data[index].rm;
              document.getElementById("appoint").innerHTML = data[index].appoint;
              modify.style.setProperty("--img", data[index].url);
            }
    });
}


//   list.addEventListener('click', e => {
//   if(findM.classList.contains('openModal')){
//     findM.classList.remove('openModal');
//     hideme.classList.add('hides');  
//       hideme.classList.remove('unhide');
//     }else
//     { 
//       hideme.classList.add('unhide');
//       hideme.classList.remove('hides');
//       findM.classList.add('openModal');
//       var x = document.getElementsByTagName("button")[mid].innerText;
//       document.getElementById("doctor_name").innerHTML = x;  
//     }
//   });

//   internalMed.addEventListener('click', e => {
//     if(findM.classList.contains('openModal')){
//       findM.classList.remove('openModal');
//       hideme.classList.add('hides');  
//         hideme.classList.remove('unhide');
//       }else
//       { 
//         hideme.classList.add('unhide');
//         hideme.classList.remove('hides');
//         findM.classList.add('openModal');
//         var x = document.getElementsByTagName("button")[mid].innerText;
//         document.getElementById("doctor_name").innerHTML = x;  
//       }
//     });
  
//     dentMed.addEventListener('click', e => {
//       if(findM.classList.contains('openModal')){
//         findM.classList.remove('openModal');
//         hideme.classList.add('hides');  
//           hideme.classList.remove('unhide');
//         }else
//         { 
//           hideme.classList.add('unhide');
//           hideme.classList.remove('hides');
//           findM.classList.add('openModal');
//           var x = document.getElementsByTagName("button")[mid].innerText;
//           document.getElementById("doctor_name").innerHTML = x;  
//         }
//       });

//       Cardio.addEventListener('click', e => {
//         if(findM.classList.contains('openModal')){
//           findM.classList.remove('openModal');
//           hideme.classList.add('hides');  
//             hideme.classList.remove('unhide');
//           }else
//           { 
//             hideme.classList.add('unhide');
//             hideme.classList.remove('hides');
//             findM.classList.add('openModal');
//             var x = document.getElementsByTagName("button")[mid].innerText;
//             document.getElementById("doctor_name").innerHTML = x;  
//           }
//         });

//         Derma.addEventListener('click', e => {
//           if(findM.classList.contains('openModal')){
//             findM.classList.remove('openModal');
//             hideme.classList.add('hides');  
//               hideme.classList.remove('unhide');
//             }else
//             { 
//               hideme.classList.add('unhide');
//               hideme.classList.remove('hides');
//               findM.classList.add('openModal');
//               var x = document.getElementsByTagName("button")[mid].innerText;
//               document.getElementById("doctor_name").innerHTML = x;  
//             }
//           });
//           Endo.addEventListener('click', e => {
//             if(findM.classList.contains('openModal')){
//               findM.classList.remove('openModal');
//               hideme.classList.add('hides');  
//                 hideme.classList.remove('unhide');
//               }else
//               { 
//                 hideme.classList.add('unhide');
//                 hideme.classList.remove('hides');
//                 findM.classList.add('openModal');
//                 var x = document.getElementsByTagName("button")[mid].innerText;
//                 document.getElementById("doctor_name").innerHTML = x;  
//               }
//             });
//             Gastro.addEventListener('click', e => {
//               if(findM.classList.contains('openModal')){
//                 findM.classList.remove('openModal');
//                 hideme.classList.add('hides');  
//                   hideme.classList.remove('unhide');
//                 }else
//                 { 
//                   hideme.classList.add('unhide');
//                   hideme.classList.remove('hides');
//                   findM.classList.add('openModal');
//                   var x = document.getElementsByTagName("button")[mid].innerText;
//                   document.getElementById("doctor_name").innerHTML = x;  
//                 }
//               });
//               Nephro.addEventListener('click', e => {
//                 if(findM.classList.contains('openModal')){
//                   findM.classList.remove('openModal');
//                   hideme.classList.add('hides');  
//                     hideme.classList.remove('unhide');
//                   }else
//                   { 
//                     hideme.classList.add('unhide');
//                     hideme.classList.remove('hides');
//                     findM.classList.add('openModal');
//                     var x = document.getElementsByTagName("button")[mid].innerText;
//                     document.getElementById("doctor_name").innerHTML = x;  
//                   }
//                 });
//                 Onco.addEventListener('click', e => {
//                   if(findM.classList.contains('openModal')){
//                     findM.classList.remove('openModal');
//                     hideme.classList.add('hides');  
//                       hideme.classList.remove('unhide');
//                     }else
//                     { 
//                       hideme.classList.add('unhide');
//                       hideme.classList.remove('hides');
//                       findM.classList.add('openModal');
//                       var x = document.getElementsByTagName("button")[mid].innerText;
//                       document.getElementById("doctor_name").innerHTML = x;  
//                     }
//                   });
//                   Pulmo.addEventListener('click', e => {
//                     if(findM.classList.contains('openModal')){
//                       findM.classList.remove('openModal');
//                       hideme.classList.add('hides');  
//                         hideme.classList.remove('unhide');
//                       }else
//                       { 
//                         hideme.classList.add('unhide');
//                         hideme.classList.remove('hides');
//                         findM.classList.add('openModal');
//                         var x = document.getElementsByTagName("button")[mid].innerText;
//                         document.getElementById("doctor_name").innerHTML = x;  
//                       }
//                     });
//                     Neuro.addEventListener('click', e => {
//                       if(findM.classList.contains('openModal')){
//                         findM.classList.remove('openModal');
//                         hideme.classList.add('hides');  
//                           hideme.classList.remove('unhide');
//                         }else
//                         { 
//                           hideme.classList.add('unhide');
//                           hideme.classList.remove('hides');
//                           findM.classList.add('openModal');
//                           var x = document.getElementsByTagName("button")[mid].innerText;
//                           document.getElementById("doctor_name").innerHTML = x;  
//                         }
//                       });
          

// closeme.addEventListener('click', function(){
//   if(findM.classList.contains('openModal')){
//     findM.classList.remove('openModal');
//     hideme.classList.add('hides');
//       hideme.classList.remove('unhide');
//     }else
//     { 
//       hideme.classList.add('unhide');
//       hideme.classList.remove('hides');
//       findM.classList.add('openModal');
//     }
// });
// for (let i = 0; i < mi; i++)
// {
//     list.children[i].onclick = function(){
//       mid = i;
//    } 
// }
// for (let i = 0; i < md; i++)
// {
//     internalMed.children[i].onclick = function(){
//       mid = mi + i;
//    } 
// }
// for (let i = 0; i < m2; i++)
// {
//     dentMed.children[i].onclick = function(){
//       mid = mi + md + i;
//    } 
// }
// for (let i = 0; i < m3; i++)
// {
//     Cardio.children[i].onclick = function(){
//       mid = mi + md + m2 + i;
//    } 
// }
// for (let i = 0; i < m4; i++)
// {
//     Derma.children[i].onclick = function(){
//       mid = mi + md + m2 + m3 + i;
//    } 
// }
// for (let i = 0; i < m5; i++)
// {
//     Endo.children[i].onclick = function(){
//       mid = mi + md + m2 + m3 + m4 + i;
//    } 
// }
// for (let i = 0; i < m6; i++)
// {
//     Gastro.children[i].onclick = function(){
//       mid = mi + md + m2 + m3 + m4 + m5 + i;
//    } 
// }
// for (let i = 0; i < m7; i++)
// {
//     Nephro.children[i].onclick = function(){
//       mid = mi + md + m2 + m3 + m4 + m5 + m6 + i;
//    } 
// }
// for (let i = 0; i < m8; i++)
// {
//     Onco.children[i].onclick = function(){
//       mid = mi + md + m2 + m3 + m4 + m5 + m6 + m7 + i;
//    } 
// }
// for (let i = 0; i < m9; i++)
// {
//     Pulmo.children[i].onclick = function(){
//       mid = mi + md + m2 + m3 + m4 + m5 + m6 + m7 + m8 + i;
//    } 
// }
// for (let i = 0; i < m10; i++)
// {
//     Neuro.children[i].onclick = function(){
//       mid = mi + md + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + i;
//    } 
// }





