body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background: #007bff;
    color: white;
    padding: 1rem;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
}

section {
    padding: 4rem 2rem;
    max-width: 800px;
    margin: 80px auto 20px auto;
    background: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

button {
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 5px;
}

button:hover {
    background: #0056b3;
}

form input, form textarea {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form {
    display: flex;
    flex-direction: column;
}

/* Responsive Design */
@media (max-width: 768px) {
    header {
        padding: 0.5rem;
    }
    
    nav ul {
        flex-direction: column;
        align-items: center;
    }
    
    section {
        padding: 2rem 1rem;
    }
    
    form input, form textarea {
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 1.5rem;
    }
    
    nav a {
        font-size: 14px;
    }
    
    button {
        width: 100%;
    }
}
