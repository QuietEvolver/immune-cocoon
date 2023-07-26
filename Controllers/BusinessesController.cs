﻿// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// using Newtonsoft.Json;
using BusinessApi;
// TODO: integrate chat GPT

namespace csharp.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BusinessesController : ControllerBase
{
    private readonly BusinessApiContext _context;

    public BusinessesController(BusinessApiContext context)
    {
        _context = context;
    }

    [Route("api/tryjson")]
    [HttpGet]
    public ActionResult<IEnumerable<Business>> Get(int pageNumber = 1, int resultsPerPage = 2)
    {
        var query = _context.Businesses.OrderBy(x => x.BusinessId);
        var totalResultCount = query.Count();
        var items = query.Skip((pageNumber - 1) * resultsPerPage).Take(resultsPerPage).ToList();
        var totalPages = (int)Math.Ceiling((double)totalResultCount / resultsPerPage);
        var metadata = new
        {
            totalResultCount,
            resultsPerPage,
            currentPage = pageNumber,
            totalPages
        };
        // Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));
        return items.ToList();
    }


    // GET: api/businesses/
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Business>>> Get( string? type, string?  name, int? minimumYearsInBusiness) 
    {
        IQueryable<Business> query = _context.Businesses.AsQueryable();
        if ( type != null)
        {
            query = query.Where(entry => entry.Type == type);
        }
        if ( name != null)
        {
            query = query.Where(entry => entry.Name == name);
        }
        if (minimumYearsInBusiness > 0)
        {
            query =  query.Where(entry => entry.YearsInBusiness >= minimumYearsInBusiness);
        }
        return await query.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Business>> GetBusiness(int id)
    {
        var business = await _context.Businesses.FindAsync(id);

        if (business == null)
        {
            return NotFound();
        }

        return business;
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutBusiness(int id, Business business)
    {
        if (id != business.BusinessId)
        {
            return BadRequest();
        }

        _context.Entry(business).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!BusinessExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpPost]
    public async Task<ActionResult<Business>> PostBusiness(Business business)
    {
        _context.Businesses.Add(business);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetBusiness", new { id = business.BusinessId }, business);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBusiness(int id)
    {
        var business = await _context.Businesses.FindAsync(id);
        if (business == null)
        {
            return NotFound();
        }

        _context.Businesses.Remove(business);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool BusinessExists(int id)
    {
        return _context.Businesses.Any(e => e.BusinessId == id);
    }
}
