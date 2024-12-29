var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//app.UseStaticFiles();

//app.UseDefaultFiles();
//Did not work, UseDefaultFiles finds the path and update the url then UseStaticFiles serves the file

app.UseDefaultFiles();

app.UseStaticFiles();


app.Run();
