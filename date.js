function processDates(dates) {
    const isValidDate = (dateString) => {
        const [day, month, year] = dateString.split('/').map(Number);

        if (year < 1 || month < 1 || month > 12 || day < 1) return false;

        const daysInMonth = new Date(year, month, 0).getDate();
        return day <= daysInMonth;
    };

    const calculateAge = (dateString) => {
        const [day, month, year] = dateString.split('/').map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const hasHadBirthdayThisYear =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!hasHadBirthdayThisYear) {
            age -= 1;
        }

        return age;
    };

    return dates.map((date) => {
        const isValid = isValidDate(date);
        const age = isValid ? calculateAge(date) : null;

        return {
            date,
            age,
            isValid,
        };
    });
}

const dates = ['05/05/1970', '29/02/2023', '01/01/2020', '31/25/2000', '31/04/2024'];
const result = processDates(dates);
console.log(result);