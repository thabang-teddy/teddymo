
export const CalculateTimeSince = (dateString: String, yearOnly: boolean = false) => {
    const start = new Date(dateString.toString());
    const now = new Date();

    const years = now.getFullYear() - start.getFullYear();
    const months = now.getMonth() - start.getMonth();
    const days = now.getDate() - start.getDate();

    let adjustedYears = years;
    let adjustedMonths = months;

    if (months < 0 || (months === 0 && days < 0)) {
      adjustedYears -= 1;
      adjustedMonths += 12;
    }

    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      adjustedMonths -= 1;
    }

    return `${adjustedYears} years ${adjustedMonths > 0 && !yearOnly ? (', ' + adjustedMonths + ' months') : ''}`;
  };