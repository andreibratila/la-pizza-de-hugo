
type FormContact = {
    labelText: string;
    labelError: string;
    inputType: string;
    inputValue: string;
    inputPlaceholder: string;
    
  };

export const formContact:FormContact[] = [
    {
        labelText: "Nombre",
        labelError: "name",
        inputType: "text",
        inputValue: "name",
        inputPlaceholder: "Nombre",
    },
    {
        labelText: "Asuto",
        labelError: "subject",
        inputType: "text",
        inputValue: "subject",
        inputPlaceholder: "Asunto",
    },
    {
        labelText: "Teléfono",
        labelError: "phone",
        inputType: "text",
        inputValue: "phone",
        inputPlaceholder: "Teléfono",
    },
    {
        labelText: "Email",
        labelError: "email",
        inputType: "email",
        inputValue: "email",
        inputPlaceholder: "Email",
    },
]