import { DatePicker, Input, RangePicker, Select } from "../../components";
import { Methods, requests } from "../../api/api.config";

export type TCityOptions = { value: string; label: string }[] | undefined;
export type TCity = {
  address: {
    city: string;
  };
};
export type TFormData = {
  Birthday?: any;
  City?: any;
  ITN: number;
  MiddleName?: string;
  Name: string;
  PhoneNumber?: number;
  DatesTraining?: any;
  Surname: string;
  todayDate?:string;
};

const result = await requests.makeApiRequest(Methods.GET, "/users");
const mappedResult = result.data.map((obj: TCity) => {
  return {
    value: obj.address.city,
    label: obj.address.city,
  };
});

const clientDetails = [
  {
    id: 1,
    label: "Фамилия",
    name: "Surname",
    required: true,
    placeholder: "Введите свою фамилию",
    component: Input,
    rules: { required: "Пожалуйста, введите свою фамилию" },
  },
  {
    id: 2,
    label: "Имя",
    name: "Name",
    required: true,
    placeholder: "Введите свое имя",
    component: Input,
    rules: { required: "Пожалуйста, введите своё имя" },
  },
  {
    id: 3,
    label: "Отчество",
    name: "MiddleName",
    placeholder: "Введите свое отчество",
    component: Input,
  },
  {
    id: 4,
    label: "День рождения",
    name: "Birthday",
    placeholder: "Выберите дату рождения",
    component: DatePicker,
  },
  {
    id: 5,
    label: "Даты начала и окончания обучения",
    name: "DatesTraining",
    placeholder: ["Дата начала", "Дата окончания"],
    component: RangePicker,
  },
  {
    id: 6,
    label: "Номер телефона",
    name: "PhoneNumber",
    placeholder: "Введите номер телефона",
    component: Input,
    addonBefore: "+7",
    maxLength: 10,
    minLength: 10,
    isNumber: true,
  },
  {
    id: 7,
    label: "ИНН",
    name: "ITN",
    required: true,
    placeholder: "Введите ИНН",
    component: Input,
    maxLength: 11,
    minLength: 11,
    isNumber: true,
    rules: { required: "Пожалуйста, введите ИНН" },
  },
  {
    id: 8,
    label: "Город",
    name: "City",
    component: Select,
    options: mappedResult,
    placeholder: "Выберите город",
  },
];

export { clientDetails };
