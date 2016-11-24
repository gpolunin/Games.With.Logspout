function appInner()
{
    console.log(`Test app 1 Log record: ${new Date()}`);
    setTimeout(appInner, 3000);
}

appInner();