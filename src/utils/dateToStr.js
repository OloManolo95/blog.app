export default function formatDate(publishedDate) {
    const month = String(publishedDate.getMonth() + 1).padStart(2, '0');
    const day = String(publishedDate.getDate()).padStart(2, '0');
    const year = publishedDate.getFullYear();
    return `${month}/${day}/${year}`;
  };

