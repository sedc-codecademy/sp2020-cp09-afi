﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Roomates.Models.SettingsModels;
using Roomates.Services.Helpers;
using Roomates.Services.Interfaces;
using Roomates.Services.Services;

namespace Roomates.Application
{
    public class Startup
    {
    
            public Startup(IConfiguration configuration)
            {
                Configuration = configuration;
            }

            public IConfiguration Configuration { get; }

            // This method gets called by the runtime. Use this method to add services to the container.
            public void ConfigureServices(IServiceCollection services)
            {
                services.AddCors(opt =>
                {
                    opt.AddPolicy("CorsPolicy", builder =>
                        builder.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .AllowCredentials());
                });


                // get connection string
                var connectionString = Configuration.GetConnectionString("DefaultConnection");

                // register data access dependencies
                DiModule.RegisterModule(services, connectionString);

                // service registration
                services.AddTransient<IUserService, UserService>();
               services.AddTransient<IApartmentService, ApartmentService>();

                var jwtSection = Configuration.GetSection("JwtSettings");
                services.Configure<JwtSettings>(jwtSection);
                var jwtSettings = jwtSection.Get<JwtSettings>();

                var secret = Encoding.ASCII.GetBytes(jwtSettings.Secret);
                services.AddAuthentication(
                    x =>
                    {
                        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    }).AddJwtBearer(x =>
                    {
                        x.RequireHttpsMetadata = false;
                        x.SaveToken = true;
                        x.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = new SymmetricSecurityKey(secret),
                            ValidateIssuer = false,
                            ValidateAudience = false
                        };
                    });

                services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            }

            // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
            public void Configure(IApplicationBuilder app, IHostingEnvironment env)
            {
                if (env.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();
                }

                app.UseCors("CorsPolicy");
                app.UseAuthentication();

                app.UseMvc();
            }
        }
    }
