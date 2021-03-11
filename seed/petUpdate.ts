import { Pet } from "../src/modules/pet";
import mongoose from "../src/mongoose";

const id = mongoose.Types.ObjectId("6042bebfa45b6ce8c597505d");

const petToUpdate = new Pet({
  _id: id,
  name: "Shih-Tzu",
  etimology:
    "El nombre Shih Tzu proviene de la palabra china 'perro león' ya que este tipo de perro fue criado para parecerse al león, tal y como se representan los leones guardianes chinos en el arte oriental tradicional.",
  history: `
  Durante el siglo XVII el Dalai Lama obsequió al Emperador algunos ejemplares de esta raza. A finales del siglo XIX, Ts'eu-hi, emperatriz abuela del último emperador, era una gran admiradora del Shih Tzu por lo que tenía más de un centenar de estos animales junto con cuidadores especializados para los mismos. Desafortunadamente al morir la emperatriz en 1908 la popularidad del Shih Tzu se vio drásticamente reducida.
  No fue sino a principios de los años treinta, cuando comenzó a introducirse en casas de notables chinos volviéndose un poco más común. Fue en aquella época cuando recibió algunos nombres del tipo: Lhassa lion dog, tibetano poodle, etc. En 1934 se fundó el primer Club especializado de la raza, el Peking Kennel Club. Sin embargo, la invasión japonesa en China durante ese mismo año ocasionó que la raza se extinguiera en su propio país de origen.
  `,
  features: `
  El Shih Tzu es un perro pequeño, algo más largo que alto; no suele superar los 26-27 cm de altura a la cruz, y el peso oscila entre los 4,5 y los 7,3 kg. Su cabeza es, a su vez, reducida en relación con el resto del cuerpo, con un hocico corto y ojos muy grandes y oscuros.
  Las orejas, grandes y colgantes, tienen tanto pelo que parecen formar un todo con el pelo del cuello.
  `,
  temperament: `
  La raza tiene un temperamento leal, cariñoso y sociable, y suele mantenerse alerta. Es un perro guardián excelente, aunque no fueron criados específicamente para este fin. A diferencia del Lhasa Apso, que fue criado para ser un perro centinela y, por ende, desconfiado con los extraños, el Shih Tzu prefiere estar cerca de sus propietarios y con frecuencia les ofrece afecto a personas desconocidas para él.
  `,
  mortaility: `
  Una encuesta del Kennel Club en Reino Unido establece el promedio de vida de un Shih Tzu a los 13 años y 2 meses, si bien la mayoría viven entre 10 y 16 años.
  `,
  caring: `
  Los ojos son siempre enormes, por lo cual hay que prestarles un cuidado especial si se quieren evitar problemas de salud en esta zona. Su pelo es largo y muy denso, pero nunca rizado (se permite un poco de ondulación). El hocico es corto y chato, lo que a veces les produce problemas de respiración; por ejemplo, es bastante habitual que ronquen sonoramente.
  `,
  feeding: `
  Hay que tener cuidado, también, con la alimentación: son perros de estómago muy delicado, normalmente no aceptan bien otra cosa que no sea alimento seco, por otra parte se les puede dar comida sólida muy moderada, a algunos les gusta mucho la lechuga y salmón para el brillo de su pelaje.
  `,
  picture:
    "https://live.hsmob.io/storage/images/wakyma.com/wakyma.com_cuidados-necesarios-del-perro-shih-tzu.jpg",
});

Pet.findByIdAndUpdate(id, petToUpdate, {
  useFindAndModify: false,
})
  .then(() => {
    console.log("ok");
  })
  .catch((err) => {
    console.error("error -->", err);
  });
