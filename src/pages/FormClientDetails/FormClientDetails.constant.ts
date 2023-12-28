const clientDetails = [
  {
    type: "Input",
    name: "Фамилия",
    label: "Фамилия",
    required: true,
    message: "Введите свою фамилию",
  },
  {
    type: "Input",
    name: "Имя",
    label: "Имя",
    required: true,
    message: "Введите свое имя",
  },
  {
    type: "Input",
    name: "Отчество",
    label: "Отчество",
    required: true,
    message: "Введите свое отчество",
  },
  {
    type: "DatePicker",
    label: "День рождения",
    required: true,
    message: "Выберите дату рождения",
  },
  {
    type: "RangePicker",
    label: "Даты начала и окончания обучения",
    required: true,
    message: "Выберите дату начала и окончания обучения",
  },
  {
    type: "InputNumber",
    label: "Номер телефона",
    required: true,
    message: "Введите номер телефона",
  },
  { type: "InputNumber", label: "ИНН", required: true, message: "Выберите ИНН" },
];

export { clientDetails };
