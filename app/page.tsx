export default function Home() {
	function myFunc<T>(value: T) {
		const finalValue = value * 3
		return finalValue
	}
  return (
	<>
		<p>The value is: {myFunc(5)}</p>
	</>	
  );
}
