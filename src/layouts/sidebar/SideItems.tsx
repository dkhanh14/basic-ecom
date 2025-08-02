export type SideItem = {
    label: string;
    key: string;
    options?: {
        label: string;
        value: string;
    }[];
};

export const SideItems: SideItem[] = [
    {
        label: "Tất cả giày",
        key: "all",
        options: [
            { label: "Jordan", value: "Jordan" },
            { label: "Chạy", value: "Running" },
            { label: "Bóng rổ", value: "Basketball" },
            { label: "Bóng đá", value: "Football" },
            { label: "Golf", value: "Golf" },
            { label: "Tennis", value: "Tennis" },
            { label: "Đi bộ", value: "Walking" },
            { label: "Gym", value: "Gym" },
        ],
    },
    {
        label: "Giới tính",
        key: "gender",
        options: [
            { label: "Nam", value: "male" },
            { label: "Nữ", value: "female" },
        ],
    },
    {
        label: "Trẻ em",
        key: "children",
        options: [
            { label: "Bé trai", value: "boys" },
            { label: "Bé gái", value: "girls" },
        ],
    },
    {
        label: "Màu sắc",
        key: "color",
        options: [
            { label: "Đen", value: "black" },
            { label: "Trắng", value: "white" },
            { label: "Đỏ", value: "red" },
            { label: "Xanh", value: "blue" },
            { label: "Vàng", value: "yellow" },
        ],
    },
    {
        label: "Sale",
        key: "sale",
        options: [
            { label: "Giảm giá nhiều", value: "big-sale" },
            { label: "Dưới 500K", value: "under-500" },
            { label: "Mua 1 tặng 1", value: "buy-1-get-1" },
        ],
    },
    {
        label: "Thương hiệu",
        key: "brand",
        options: [
            { label: "Nike", value: "nike" },
            { label: "Adidas", value: "adidas" },
            { label: "Puma", value: "puma" },
            { label: "Converse", value: "converse" },
        ],
    },
    {
        label: "Bộ sưu tập",
        key: "collection",
        options: [
            { label: "Xuân Hè", value: "spring-summer" },
            { label: "Thu Đông", value: "fall-winter" },
            { label: "Retro", value: "retro" },
            { label: "Limited", value: "limited" },
        ],
    },
    {
        label: "Tính năng",
        key: "feature",
        options: [
            { label: "Chống trượt", value: "anti-slip" },
            { label: "Thoáng khí", value: "breathable" },
            { label: "Chống nước", value: "waterproof" },
            { label: "Đệm khí", value: "air-cushion" },
        ],
    },
    {
        label: "Thể thao",
        key: "sports",
        options: [
            { label: "Chạy", value: "running" },
            { label: "Gym", value: "gym" },
            { label: "Tennis", value: "tennis" },
            { label: "Bóng rổ", value: "basketball" },
        ],
    },
    {
        label: "Chiều dài",
        key: "length",
        options: [
            { label: "Thấp cổ", value: "low" },
            { label: "Trung cổ", value: "mid" },
            { label: "Cao cổ", value: "high" },
        ],
    },
];
