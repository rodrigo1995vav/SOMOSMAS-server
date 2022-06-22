const express = require('express');
const organizationRepository = require('../repositories/organization-repository')

const getOrganization = async (id) =>{
    const organization = await organizationRepository.getOrganizationById(id)
    return organization
}

module.exports={
    getOrganization
}