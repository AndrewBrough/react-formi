interface ResponseMessageProps {
  response: string;
  setResponse: (value: string) => void;
}

export const ResponseMessage = ({
  response,
  setResponse,
}: ResponseMessageProps) => {
  if (!response) return;

  return (
    <div>
      <p>{response}</p>
      <button onClick={() => setResponse("")}>clear</button>
    </div>
  );
};
