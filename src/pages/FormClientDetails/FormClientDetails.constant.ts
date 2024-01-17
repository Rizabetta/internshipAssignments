import {
  DatePicker,
  Input,
  InputNumber,
  RangePicker,
  Select,
} from "../../components";
import { Methods, requests } from "../../api/api.config";

export type TCityOptions = { value: string; label: string }[] | undefined;
export type TCity = {
  address: {
    city: string;
  };
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
  },
  {
    id: 2,
    label: "Имя",
    name: "Name",
    required: true,
    placeholder: "Введите свое имя",
    component: Input,
  },
  {
    id: 3,
    label: "Отчество",
    name: "MiddleName",
    required: true,
    placeholder: "Введите свое отчество",
    component: Input,
  },
  {
    id: 4,
    label: "День рождения",
    name: "Birthday",
    required: true,
    placeholder: "Выберите дату рождения",
    component: DatePicker,
  },
  {
    id: 5,
    label: "Даты начала и окончания обучения",
    name: "DatesTraining",
    required: true,
    placeholder: ["Дата начала", "Дата окончания"],
    component: RangePicker,
  },
  {
    id: 6,
    label: "Номер телефона",
    name: "PhoneNumber",
    required: true,
    placeholder: "Введите номер телефона",
    component: InputNumber,
    addonBefore: "+7",
    maxLength: 10,
    minLength: 10,
  },
  {
    id: 7,
    label: "ИНН",
    name: "ITN",
    required: true,
    placeholder: "Введите ИНН",
    component: InputNumber,
    maxLength: 12,
    minLength: 12,
  },
  {
    id: 8,
    label: "Город",
    name: "City",
    required: true,
    component: Select,
    options: mappedResult,
    placeholder: "Выберите город",
  },
];

export { clientDetails };
