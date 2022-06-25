export function Card({ image = "", text = "Info Resiskom" }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "280px",
        height:'330px',
        borderRadius: "2rem",
        border: "10px solid white",
        textAlign: "center",
        backgroundColor: "#DCDCDC",
        overflow: "hidden",
        boxShadow:'1px 2px 9px black',
      }}

    >
      <div
        style={{
          backgroundColor: "#EBEBEB",
        }}
      >
        {image && (
          <img
            src={image}
            alt="Cover"
            style={{ width: "auto", borderRadius: "1rem" }}
          />
        )}
      </div>
      <h3 style={{ 
        padding: "10px 1px 10px 10px",
        fontSize:'35px'
    }}>{text && text}</h3>
    </div>
  );
}
