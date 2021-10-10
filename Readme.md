fetch
function ContentArea() {
const [data, setData] = useState([]);

const getApi = () => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((json) => setData(json));
};

useEffect(() => {
getApi();
}, []);
return (
<div className="area">
{/_ <pre>{JSON.stringify(data, null, 2)}</pre> _/}
<ul>
{data.map((item) => (
<li key={item.id}>{item.title}</li>
))}
</ul>
</div>
);
}
