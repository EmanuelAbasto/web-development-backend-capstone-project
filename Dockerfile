# Etapa 1: Construcción (Build)
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
# Construimos el proyecto saltando los tests para acelerar el despliegue
RUN mvn clean package -DskipTests

# Etapa 2: Ejecución (Runtime)
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
# Configuración de memoria optimizada para el plan gratuito de Render
ENTRYPOINT ["java", "-Xmx300m", "-Xss512k", "-jar", "app.jar"]