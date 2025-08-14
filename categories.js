const CATEGORIES = [
{ id: "Car Repair", label: "Car Repair", isIncome: false },
{ id: "Clothing", label: "Clothing", isIncome: false },
{ id: "Credit Card", label: "Credit Card", isIncome: false },
{ id: "Dining", label: "Dining", isIncome: false },
{ id: "Groceries", label: "Groceries", isIncome: false },
{ id: "Gym", label: "Gym", isIncome: false },
{ id: "House Repair", label: "House Repair", isIncome: false },
{ id: "Leisure", label: "Leisure", isIncome: false },
{ id: "Medical", label: "Medical", isIncome: false },
{ id: "Pets", label: "Pets", isIncome: false },
{ id: "Personal Expenses", label: "Personal Expenses", isIncome: false },
{ id: "Rent/Mortgage", label: "Rent/Mortgage", isIncome: false },
{ id: "Sub", label: "Sub", isIncome: false },
{ id: "Transport", label: "Transport", isIncome: false },
{ id: "Tuition", label: "Tuition", isIncome: false },
{ id: "Utilities", label: "Utilities", isIncome: false },

{ id: "Freelance", label: "Freelance", isIncome: true },
{ id: "Lottery", label: "Lottery", isIncome: true },
{ id: "Other Income", label: "Other Income", isIncome: true },
{ id: "Salary", label: "Salary", isIncome: true },
{ id: "Savings", label: "Savings", isIncome: true }
];

function renderCategorySelect(selectId, categories) {
    var select = document.getElementById(selectId);
    select.innerHTML = "";

    var option = document.createElement("option");
    option.value = "";
    option.textContent = "Select Category";
    option.disabled = true;
    option.selected = true;
    select.appendChild(option);

    for (var i = 0; i < categories.length; i++) {
        var option = document.createElement("option");
        option.value = categories[i].id;
        option.textContent = categories[i].label;
        select.appendChild(option);
    }
}

function getCategoryById(id) {
    for (var i = 0; i < CATEGORIES.length; i++) {
        if (CATEGORIES[i].id === id) return CATEGORIES[i];
    }
    return id || "";
}

renderCategorySelect("eventTitle", CATEGORIES);