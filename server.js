const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Bật CORS cho phép Web Frontend truy cập tự do
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('🚀 Backend Web Blox Fruits đang quạt chả phay phay!');
});

// API trả thông tin Hải tặc
app.get('/api/player/:userId', (req, res) => {
    res.json({
        success: true,
        playerData: {
            id: req.params.userId,
            level: 700,
            beli: 1500000,
            fragments: 5000,
            currentFruit: "Buddha (Phật Tổ)"
        }
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
